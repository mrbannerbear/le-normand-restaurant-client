import { Outlet } from "react-router-dom";
import Navbar from "../home/homeComps/Navbar";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;