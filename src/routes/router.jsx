import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/mainComps/MainLayout";
import Error from "../components/mainComps/Error";
import Home from "../components/home/Home";
import Menu from "../components/menus/Menu";
import Contact from "../components/contact/Contact";
import SignUp from "../components/auth/SignUp";
import Admin from "../components/admin/Admin";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/auth/Login";
import AuthorizedUsers from "../components/admin/adminComps/AuthorizedUsers/AuthorizedUsers";
import EditMenu from "../components/admin/adminComps/EditMenu/EditMenu";
import Reservation from "../components/reservation/Reservation";
import PrivateDining from "../components/private-dining/PrivateDining";
import About from "../components/about/About";

const router = createBrowserRouter(
    [
    {
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                element: <Menu></Menu>,
                path: "/menus"
            },
            {
                element: <About></About>,
                path: "/about"
            },
            {
                element: <Contact></Contact>,
                path: "/contact"
            },
            {
                element: <Reservation></Reservation>,
                path: "/reservation"
            },
            {
                element: <SignUp></SignUp>,
                path: "/signup"
            },
            {
                element: <Login></Login>,
                path: "/login"
            }
        ]
    },
    {
        element: <Home></Home>,
        path: "/"
    },
    {
        element: <PrivateDining></PrivateDining>,
        path: "/private-dining"
    },
    {
        element: <PrivateRoute>
            <Admin></Admin>
        </PrivateRoute>,
        children: [
            {
                element: <AuthorizedUsers></AuthorizedUsers>,
                path: "/admin/authorized-users"
            },
            {
                element: <EditMenu></EditMenu>,
                path: "/admin/edit-menu"
            },
        ]
    }
]
)

export default router