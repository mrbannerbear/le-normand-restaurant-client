import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/mainComps/MainLayout";
import Error from "../components/mainComps/Error";
import Home from "../components/home/Home";
import Menu from "../components/menus/Menu";

const router = createBrowserRouter([
    {
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                element: <Menu></Menu>,
                path: "/menus"
            }
        ]
    },
    {
        element: <Home></Home>,
        path: "/"
    }
])

export default router