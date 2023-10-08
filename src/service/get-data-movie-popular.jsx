import {useQuery} from '@tanstack/react-query'
import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'


const fetchDataMoviePopular = async (page) => {
    //v3
    const { data } = await http.get(`${API_ENDPOINT.POPULAR}?page=${page ? page :1}`)
    return data
    //v4
    // const [_key, _params] = queryKey;
    // const { data } = await http.get(_key, { params : _params});
    // return data
    // const [_key, _params] = queryKey;
    // const { data } = await http.get(_key, { params : _params})
    // return data
}


const useMovieDataQueryPopular = (page) => {
    // v3
    return useQuery(["userData", page], () => fetchDataMoviePopular(page))
    //v4
    // return useQuery([API_ENDPOINT.NOW_PLAYING , options]  , fetchDataMovie)
    // return useQuery([API_ENDPOINT.NOW_PLAYING, options], fetchDataMovie)

}

export {fetchDataMoviePopular, useMovieDataQueryPopular}

// const fetchDataMovieNow = async (page) =>{
//     const {data} = http.get(`${API_ENDPOINT.NOW_PLAYING}?page=${page ? page : 1}`)
//     return data
// }

// const useMovieDataNow = (page) => {
//     return useQuery(["user data", page], () => fetchDataMovieNow(page));
// }
// export {fetchDataMovieNow, useMovieDataNow}