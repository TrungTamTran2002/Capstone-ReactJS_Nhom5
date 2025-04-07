// https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01

import axios from "axios"
import {CYBER_TOKEN} from './config';

export const getListMovieService = () => {
    return axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
        headers: {
                  TokenCybersoft: CYBER_TOKEN,
                },
    })  
}
