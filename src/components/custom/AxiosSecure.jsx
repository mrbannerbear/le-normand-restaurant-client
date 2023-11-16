import axios from "axios";

const AxiosSecure = () => {
    const instance = axios.create({
        baseURL: "http://localhost:4500"
    })

    return instance
};

export default AxiosSecure;