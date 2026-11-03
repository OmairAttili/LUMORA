import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useProductDetails (id){
    const getProductDetails = async()=>{
        const response = await axios.get(`https://knowledgeshop.runasp.net/api/Products/${id}`,
            {headers:{
                'Accept-Language' : 'en'
            }}
        );
         return response.data.response;
    }
    return useQuery({
        queryKey:["products",id],
        queryFn:getProductDetails,
        staleTime:60*1000*15
    })
}