import { useState } from "react";
import AxiosPublic from "./AxiosPublic";

import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query"


const useMenu = () => {

    // desired response by default is known as 'data' in tan stack query. For a different key name, we use data: 'name'.
    // for default value, we use 'name' = [] or any default value.
    const { isPending, error, data: menu = [], refetch } = useQuery({
        queryKey: ["menus"],
        queryFn: async () => {
            let response = await AxiosPublic().get("/menus")
            return response.data
        }
    })

    return [menu, refetch]
};

export default useMenu;