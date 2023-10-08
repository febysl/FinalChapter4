import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMovieDataQuerySearch } from "../service/get-data-movie-search";
import { useMovieDataQueryPopular } from "../service/get-data-movie-popular";

export const HasilPencarian = () => {
  const [pageNow, setpageNow] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const isQuery = location.state ? location.state.query : "";

  
  const { data: searchResults } = useMovieDataQuerySearch(isQuery);

  const { data: popularMovies } = useMovieDataQueryPopular(pageNow);

  const tampil = isQuery ? searchResults?.results : popularMovies?.results;

  const dataMovie = () => {
    return tampil?.map((value) => (
      <div key={value.id} className="flex wrap flex-col  w-[15rem]">
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
            alt={value.title}
          />
        </div >
        <h2 className="text-white">{value.title}</h2>
      </div>
    ));
  };

  return (
    <div className="bg-black flex flex-col text-center">
      <div className="flex justify-center items-center m-3">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-3 "
            color="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </a>
        <h1 className="text-white text-center m-6 font-bold w-full">Search Result</h1>
      </div>
      <hr />
      <br></br>
      <div className=" flex gap-5 justify-center text-start flex-wrap grid-cols-5">
        {dataMovie()}
      </div>
    </div>
  );
};
