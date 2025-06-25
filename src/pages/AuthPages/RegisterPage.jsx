import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { registerService } from "../../api/userServices";

export default function RegisterPage() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    registerService(values)
      .then(() => {
        toast.success("Đăng ký thành công!", { duration: 2000 });
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.content || "Đăng ký thất bại!");
      });
  };

  return (
    // Sửa lại phần div bao ngoài để background phủ toàn màn hình
    <div className="min-h-screen flex flex-col bg-[url('https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-1 items-center justify-center py-9">
        <div className="bg-white/90 p-6 rounded-lg shadow-lg w-full max-w-md">
          <Form
            layout="vertical"
            name="register"
            initialValues={{
              maNhom: "GP01",
            }}
            onFinish={onFinish}
            autoComplete="off"
            className="space-y-6"
          >
            <div className="text-center text-xl font-medium text-gray-900">
              <img
                className="w-10 h-10 mx-auto mb-2"
                src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                alt="Logo"
              />
              <h5 className="text-sm">REGISTER TO MY PROJECT</h5>
            </div>

            {/* Các Form.Item giữ nguyên */}
            <Form.Item
              name="taiKhoan"
              rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
            >
              <Input placeholder="Tài khoản" className="h-12 px-4" />
            </Form.Item>

            <Form.Item
              name="matKhau"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password placeholder="Mật khẩu" className="h-12 px-4" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input placeholder="Email" className="h-12 px-4" />
            </Form.Item>

            <Form.Item
              name="soDt"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại!" },
              ]}
            >
              <Input placeholder="Số điện thoại" className="h-12 px-4" />
            </Form.Item>

            <Form.Item
              name="maNhom"
              rules={[{ required: true, message: "Vui lòng nhập mã nhóm!" }]}
            >
              <Input placeholder="Mã nhóm (VD: GP01)" className="h-12 px-4" />
            </Form.Item>

            <Form.Item
              name="hoTen"
              rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
            >
              <Input placeholder="Họ tên" className="h-12 px-4" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full h-12">
                Đăng ký
              </Button>
            </Form.Item>

            <div className="text-sm text-center text-gray-500">
              Đã có tài khoản?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Đăng nhập
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
