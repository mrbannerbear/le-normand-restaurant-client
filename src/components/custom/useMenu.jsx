import { useEffect, useState } from "react";

const useMenu = () => {

    const [ menu, setMenu ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect( () => {
        fetch("/assets/menu.json")
        .then(res => res.json())
        .then(data =>{ 
            setMenu(data);
            setLoading(false)})
        .catch(err => console.log(err))
    } , [])

    return [ menu, loading ]
};

export default useMenu;