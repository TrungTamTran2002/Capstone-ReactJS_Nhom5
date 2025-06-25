import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovieService } from "../../api/movieService";
import { Progress } from "antd";

const DetailMoviePage = () => {
  let params = useParams();
  console.log("params", params);

  // set state cho detail movie
  const [detailMovie, setDetailMovie] = useState({});

  useEffect(() => {
    getDetailMovieService(params.id)
      .then((res) => {
        console.log("res", res);
        setDetailMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]); // [] chỉ chạy 1 lần khi component mount

  //

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center">Chi tiết phim</h1>
      <img src={detailMovie.hinhAnh} alt="" className="w-96 object-cover" />
      <h2>Đánh Giá</h2>
      <Progress
        type="circle"
        percent={detailMovie.danhGia * 10}
        format={() => {
          return detailMovie.danhGia + " điểm";
        }}
        className="w-20"
        strokeColor={
          detailMovie.danhGia > 8
            ? "#87d068"
            : detailMovie.danhGia > 5
            ? "#faad14"
            : "#f50"
        }
        size={300}
      />
    </div>
  );
};

export default DetailMoviePage;
