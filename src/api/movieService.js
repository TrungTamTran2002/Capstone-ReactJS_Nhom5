// https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01

// import axios from "axios";
import {CYBER_TOKEN, https} from './config';

export const getListMovieService = () => {
    // return axios({
    //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //     method: "GET",
    //     headers: {
    //               TokenCybersoft: CYBER_TOKEN,
    //             },
    // })  
    return https.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
}

export const getDetailMovieService = (id) => {

    return https.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
}