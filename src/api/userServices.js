import axios from 'axios';
import {CYBER_TOKEN} from './config';
export const loginService = (user) => {
    return axios({
        method: "POST",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data: user,
        headers: {
          TokenCybersoft: CYBER_TOKEN,
        },
      })
};