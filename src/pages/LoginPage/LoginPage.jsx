import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { loginService } from "../../api/userServices";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../redux/userSlice";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (user) => {
    loginService(user)
      .then((res) => {
        const userData = res.data.content;
        dispatch(setUserAction(userData));
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/");
        toast.success("Đăng Nhập Thành Công", { duration: 2000 });
      })
      .catch((err) => {
        console.log("Đăng nhập thất bại:", err);
        toast.error("Đăng nhập thất bại");
      });
  };

  const onFinish = (values) => {
    handleLogin(values);
  };

  return (
    <section className="flex flex-col flex-1 bg-[url('https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-1 items-center justify-center py-10">
        <div className="bg-white/90 p-6 rounded-lg shadow-lg w-full max-w-md">
          <Form
            layout="vertical"
            name="login"
            initialValues={{
              remember: true,
              taiKhoan: "mafia",
              hoTen: "Ông Trùm Cyber",
              email: "mafia@gmail.com",
              soDT: "0123456789",
              matKhau: "123456",
              maLoaiNguoiDung: "QuanTri",
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
              <h5 className="text-sm">LOGIN TO MY PROJECT</h5>
            </div>

            <Form.Item
              name="taiKhoan"
              rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
            >
              <Input placeholder="Username" className="h-12 px-4" />
            </Form.Item>

            <Form.Item
              name="matKhau"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password placeholder="••••••••" className="h-12 px-4" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <div className="flex items-center justify-between">
                <Checkbox>Remember me</Checkbox>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Lost Password?
                </a>
              </div>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full h-12">
                Login
              </Button>
            </Form.Item>

            <div className="text-sm text-center text-gray-500">
              Not registered?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Create account
              </a>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
