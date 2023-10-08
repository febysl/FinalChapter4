import {useQuery} from '@tanstack/react-query'
import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'


const fetchDataMovieTrailer = async (id) => {
    
    const { data } = await http.get(`${API_ENDPOINT.TRAILER}${id}`)
    return data
    
}


const useMovieDataQueryTrailer = (id) => {
    
    return useQuery(["userData", id], () => fetchDataMovieTrailer(id))
   

}

export {fetchDataMovieTrailer, useMovieDataQueryTrailer}

