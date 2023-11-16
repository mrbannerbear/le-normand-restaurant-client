import { useState } from "react";
import AxiosSecure from "./AxiosSecure";

import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query"


const useMenu = () => {

    // desired response by default is known as 'data' in tan stack query. For a different key name, we use data: 'name'.
    // for default value, we use 'name' = [] or any default value.
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

    return menu
};

export default useMenu;