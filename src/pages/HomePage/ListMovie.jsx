import React, { useEffect, useState } from "react";
import { getListMovieService } from "../../api/movieService";
import { Button, Card, Popover } from "antd";
import { Link } from "react-router";

const { Meta } = Card;

const ListMovie = () => {
  let [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    // gọi api lấy danh sách phim
    getListMovieService()
      .then((res) => {
        // set danh sách phim
        setListMovie(res.data.content);
      })
      .catch((err) => {
        // thông báo lỗi
        alert("Có lỗi xảy ra, vui lòng thử lại sau!");
        console.log(err);
      });
  }, []); // [] chỉ chạy 1 lần khi component mount
  // gọi api lấy danh sách phim

  const renderListMovie = () => {
    return listMovie.map((movie) => {
      const desc = (
        <Popover content={<p className="w-80">{movie.moTa}</p>}>
          <button className="text-blue-500">Xem Thêm</button>
        </Popover>
      );
      return (
        <Card
          key={movie.maPhim}
          hoverable
          // style={{ width: 240 }}
          cover={
            movie.hinhAnh ? (
              <img
                alt="example"
                src={movie.hinhAnh}
                className=" h-60 object-cover"
              />
            ) : null
          }
        >
          <Meta title={movie.tenPhim} description={desc} />
          <Link
            to={`/detail/${movie.maPhim}`}
            type="primary"
            className="mt-3 !text-red-500 "
          >
            Xem ngay
          </Link>
        </Card>
      );
    });
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-10">Danh Sách Phim</h1>
      <div className="container grid grid-cols-6 gap-5 mt-10">
        {renderListMovie()}
      </div>
    </div>
  );
};

export default ListMovie;
