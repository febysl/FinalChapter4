import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css";
import {  useMovieDataQuery } from "../service/get-data-movie-now";
import {  useNavigate } from "react-router-dom";

// import { useMovieDataQuerySearch } from "../service/get-data-movie-search";
// import { useLocation } from "react-router-dom";
// import { getDataMovie, searchMovie } from "../utils/api-endpoint";
// import { fetchDataMovieNow } from "../service/get-data-movie-now";

const Point = () => {
  SwiperCore.use(Autoplay, Pagination);
  const navigate = useNavigate();
  const [pageNow, setpageNow] = useState(1)
  
  // const options = {
  //   method: "GET",
  //   url: `${process.env.REACT_APP_SERVER}3/movie/now_playing?language=en-US&page=1`,
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       `Bearer ${process.env.REACT_APP_KEY}`,
  //   },
  // };

  // const getDataMovie = async () => {
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //     setDataAwal(response.data.results)
  //   } catch (error) {
  //     console.log(error);
  //   }
 
  // };
  
  // useEffect(() => {
  //   getDataMovie();
  //   console.log(DataAwal, "ini data");
  // }, []);
  

  const {data} = useMovieDataQuery(pageNow)
  

  return (
    <>
      <Swiper
        className="inset-0"
        modules={[Autoplay]}
        loop={true}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <>
          {data?.results?.map((value) => {
            return (
              <SwiperSlide key={value.id}>
                <div
                  className="py-24 sm:py-36 w-full relative bg center bg-cover bg-no-repeat min-h-screen "
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                      value.backdrop_path
                        ? value.backdrop_path
                        : value.poster_path
                    })`,
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black" />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent" />
                  <div className="flex flex-col gap-5 absolute w-1/2 justify-center inset-0 items-start px-4 md:px-24 ">
                    <h1 className="text-6xl font-bold text-white">
                      {value.title}
                    </h1>
                    <p className="text-white">{value.overview}</p>
                    <div className="relative flex justify-between items-center w-1/2 ">
                      
                      <Button variant="color" onClick={() => {
          navigate("/Details", {
            state: {
              IdMovie : value.id,
            },
            
          })
        }}  >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 absolute left-3"
                        color="white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                        
                      <span className="ml-6">WATCH TRAILER</span>
                      </Button>
                      
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </>
      </Swiper>
    </>
  );
};

export default Point;
