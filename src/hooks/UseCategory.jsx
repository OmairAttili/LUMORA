import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCategory = ()=>{
const getCategories = async()=>{
    const response = await axios.get(`https://knowledgeshop.runasp.net/api/Categories`,{headers:{
      'Accept-Language':"en"
    }});
    return response.data.response.data;
  }
  return useQuery({
    queryKey:["Categories"],
    queryFn:getCategories,
    staleTime:60*1000*15
  });
}
