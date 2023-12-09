import axios from "axios";

const AxiosPublic = () => {
    const instance = axios.create({
        baseURL: "  https://server-pearl-iota.vercel.app"
    })

    return instance
};

export default AxiosPublic;