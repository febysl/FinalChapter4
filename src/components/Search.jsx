import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMovieDataQuerySearch } from "../service/get-data-movie-search";

const Search = () => {
  const [search, setSearch] = useState(""); 
  const location = useLocation();
  const isQuery = location.state ? location.state.query : "";
  const [Query, setQuery] = useState(isQuery);
  const { data: detailSearch } = useMovieDataQuerySearch(Query);
  const navigate = useNavigate();
  console.log(detailSearch, "ini detail search");

  
  const handleSearch = () => {
    setQuery(search);
    navigate('/HasilPencarian', {
      state: {
        query : search
      }
    }) 
  };

  const enter = (e) => {
    if (e.key === "Enter") {
      handleSearch(); 
    }
  };

  const renderFilm = () => {
    return detailSearch?.results?.map((value) => (
      <div
        key={value.id}
        className='w-[20rem] h-[35rem] mt-5 mx-4 flex flex-col hover:border border-emerald-50  '
        onClick={() => {
          navigate(`/Details/${value.id}`, {
            state: {
              idMovie: value.id,
            },
          });
        }}>
        <img
          src={`https://image.tmdb.org/t/p/original/${value.poster_path}`}
          alt={value.title}
          className='w-full h-auto'
        />
        <h2 className='mt-2 text-center '>{value.title}</h2>
      </div>
    ));
  };

  return (
    <div className="relative flex items-center w-1/2">
      <input
        className="bg-transparent text-white outline outline-1 outline-red-500 pl-4 pr-10 py-2 rounded-full w-full"
        placeholder="What do you want to watch"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        onKeyDown={enter}
      />
    <svg
        onClick={handleSearch}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute right-3"
        color="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <div>{renderFilm()}</div>
    </div>
  );
};

export default Search;
