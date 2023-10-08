import {useQuery} from '@tanstack/react-query'
import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'


const fetchDataMovieDetails = async (id) => {
    
    const { data } = await http.get(`${API_ENDPOINT.DETAIL}/${id}?api_key=${process.env.REACT_APP_KEY}&append_to_response=videos`);
    return data
    
}


const useMovieDataQueryDetails = (id) => {
    
    return useQuery(["userData", id], () => fetchDataMovieDetails(id))
   

}

export {fetchDataMovieDetails, useMovieDataQueryDetails}

