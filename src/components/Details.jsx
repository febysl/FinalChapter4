import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMovieDataQueryDetails } from "../service/get-data-movie-details";
import Button from "./Button";





export const Details = () => {
  const data = useLocation();
  const [ID, setID] = useState(data.state.IdMovie);
  // const [dataTrailer, setDataTrailer] = useState("")

  const { data: detailMovie } = useMovieDataQueryDetails(ID);
  console.log(detailMovie, "detail")

  const findTrailer = detailMovie && detailMovie.videos.results.find((video)=> video.type==='Trailer')
  const UrlTrailer = findTrailer ? detailMovie && `https://www.youtube.com/watch?v=${findTrailer.key}`: detailMovie && `https://www.youtube.com/watch?v=${detailMovie.videos.results[0].key}`

  


  return (
    <div>
       <div className="flex justify-start items-center m-8 fixed top-0 left-0 z-50 w-full">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 "
            color="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </a>
        
      </div>
      {detailMovie &&  (
        
        <div
        
          className="py-24 sm:py-36 w-full relative bg center bg-cover bg-no-repeat min-h-screen"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
              detailMovie.backdrop_path
                ? detailMovie.backdrop_path
                : detailMovie.poster_path
            })`,
          }}
        >
          <div className="flex flex-col gap-3 absolute w-1/2 justify-center inset-0 items-start px-4 md:px-24 ">
            <h1 className="text-6xl font-bold text-white">
              {detailMovie.title}
            </h1>
            <p className="text-white">
              {detailMovie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="text-white">{detailMovie.overview}</p>
            <p className="text-white italic">Release : {detailMovie.release_date}</p>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
                color="gold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <p className="text-white">{detailMovie.vote_average} / 10</p>
              {/* popularity */}
            </div>
            
            <div className="relative flex justify-between items-center w-1/2 ">
              <a href={UrlTrailer} target="blank">

              <Button variant="color" >
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
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



