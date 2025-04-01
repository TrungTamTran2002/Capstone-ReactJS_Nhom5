import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <h1>RegisterPage</h1>
      <form className="flex flex-col space-y-4 w-1/2 mx-auto mt-10">
        <input
          type="text"
          placeholder="Họ và tên"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="border border-gray-300 p-2 rounded-md"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
