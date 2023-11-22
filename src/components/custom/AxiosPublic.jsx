import axios from "axios";

const AxiosPublic = () => {
    const instance = axios.create({
        baseURL: "http://localhost:4500"
    })

    return instance
};

export default AxiosPublic;