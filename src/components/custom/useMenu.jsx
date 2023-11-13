import { useEffect, useState } from "react";

const useMenu = () => {

    const [ menu, setMenu ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect( () => {
        fetch("http://localhost:4500/menus")
        .then(res => res.json())
        .then(data =>{ 
            setMenu(data);
            setLoading(false)})
        .catch(err => console.log(err))
    } , [])

    return [ menu, loading ]
};

export default useMenu;