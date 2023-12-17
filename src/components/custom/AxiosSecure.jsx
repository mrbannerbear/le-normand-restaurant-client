import axios from "axios";

const AxiosSecure = () => {
    const instance = axios.create({
        baseURL: " https://server-pearl-iota.vercel.app"
    })

    return instance
};

export default AxiosSecure;