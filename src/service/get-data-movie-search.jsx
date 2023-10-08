import {Query, useQuery} from '@tanstack/react-query'
import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'


const fetchDataMovieSearch = async (query) => {
    const { data } = await http.get(`${API_ENDPOINT.SEARCH}?api_key=${process.env.REACT_APP_KEY}&query=${query}`);
    return data;
  };
  


const useMovieDataQuerySearch = (query) => {
 
    return useQuery(["userDataSearch", query], () => fetchDataMovieSearch(query))
   

}

export {fetchDataMovieSearch, useMovieDataQuerySearch}

