import { useQuery } from "@tanstack/react-query";
import axios from "axios"

export const useProduct = ()=>{
    const getProduct = async()=>{
        const response = await axios.get(`https://knowledgeshop.runasp.net/api/Products`,
            {headers:{
                'Accept-Language' : 'en'
            }}
        );
        return response.data.response.data;
    }
     return useQuery({
        queryKey:["Product"],
        queryFn:getProduct,
        staleTime:60*1000*15
      });
}