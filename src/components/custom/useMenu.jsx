import { useState } from "react";
import AxiosSecure from "./AxiosSecure";

import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query"


const useMenu = () => {

    const { isPending, error, data: menu = [] } = useQuery({
        queryKey: ["menus"],
        queryFn: async () => {
            let response = await AxiosSecure().get("/menus")
            return response.data
        }
    })

    if(isPending){
        return <>...</>
    }

    else if(error){
        return <>An error occurred.</>
    }
    // const [ menu, setMenu ] = useState([])
    // const [ loading, setLoading ] = useState(true)


    //     AxiosSecure().get("http://localhost:4500/menus")
    //     .then(data =>{ 
    //         setMenu(data.data);
    //         setLoading(false)})
    //     .catch(err => console.log(err))


    return menu
};

export default useMenu;