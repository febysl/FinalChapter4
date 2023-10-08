import axios from "axios";
import React, { useEffect, useState } from "react";
import SwiperCore from "swiper";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Details } from "../components/Details";
import { useMovieDataQueryPopular } from "../service/get-data-movie-popular";


export const FilmOverflow = () => {
  SwiperCore.use(Autoplay, Pagination);
  const navigate = useNavigate();
  const [pageNow, setpageNow] = useState(1)


  const {data} = useMovieDataQueryPopular(pageNow)

  const dataMovie = () => {
    return data?.results?.map((value) => (

      <div
        key={value.id}
        >
        <div className="flex flex-wrap w-[15rem]" onClick={() => {
          navigate("/Details", {
            state: {
              IdMovie : value.id,
            },
            
          })
        }}  >
        <img
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${value.poster_path}`}
        />
        </div>
        <h2>{value.title}</h2>
        </div>
     
      
    ));
  };

  
  return (
    <div className="bg-black flex flex-col p-3">
      <div className="flex justify-between ">
        <h1 className=" font-bold text-2xl text-white ">Popular Movie</h1>
        <a href="/Film" className="text-red-500 flex gap-2 items-center mr-2 " >
          <span >See All Movie</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
          </a>
      </div>
      <div className="mt-9 flex gap-5 justify-start overflow-x-auto">
        {dataMovie()}
      </div>
    </div>
  );
};
