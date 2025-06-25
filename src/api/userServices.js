import {CYBER_TOKEN, https} from './config';
export const loginService = (user) => {
    // return axios({
    //     method: "POST",
    //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    //     data: user,
    //     headers: {
    //       TokenCybersoft: CYBER_TOKEN,
    //     },
    //   })
    return https.post("/QuanLyNguoiDung/DangNhap", user);
};

export const registerService = (user) => {
    // return axios({
    //     method: "POST",
    //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    //     data: user,
    //     headers: {
    //       TokenCybersoft: CYBER_TOKEN,
    //     },
    //   })
    return https.post("/QuanLyNguoiDung/DangKy", user);
};