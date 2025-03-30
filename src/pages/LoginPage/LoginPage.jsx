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
  const handlelogin = (user) => {
    console.log("user:", user);
    loginService(user)
      .then((res) => {
        const user = res.data.content;
        // tạo action để đưa dữ liệu lên redux store
        const action = setUserAction(user);
        // đưa action lên redux store
        dispatch(action);
        // di chuyển về trang chủ
        navigate("/");
        // window.location.reload(); gây reload lại trang => mất data
        toast.success("Đăng Nhập Thành Công", {
          duration: 2000,
          style: {
            fontSize: "16px",
          },
        });
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const onFinish = (values) => {
    handlelogin(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    // dùng bg url : https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg
    <div className=" bg-[url('https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg')] bg-cover bg-no-repeat h-screen flex items-center justify-center">
      <div className=" bg-gray-50 w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            remember: true,
            taiKhoan: "mafia",
            hoTen: "Ông Trùm MafiA kéo students số 1 Cyber",
            email: "mafia@gmail.com",
            soDT: "0147852369",
            matKhau: "8386",
            maLoaiNguoiDung: "QuanTri",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className=" space-y-6"
        >
          <div className="text-xl font-medium text-gray-900">
            <div className="flex items-center justify-center mb-4 gap-2 mt-2">
              <img
                className="w-8 h-8  rounded-lg"
                src="data:image/png;base64,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"
                alt=""
              />
              <h5 className=" font-medium text-sm text-black">
                LOGIN TO MY PROJECT
              </h5>
            </div>
          </div>

          <Form.Item
            name="taikhoan"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="px-4 py-3 h-12" placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="matkhau"
            placeholder
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="px-4 py-3 h-12" placeholder="••••••••" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <div className="flex items-center justify-between w-full">
              <Checkbox className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </Checkbox>

              <a
                href="#"
                className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" className="w-full h-12">
              Login
            </Button>
          </Form.Item>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <a
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
