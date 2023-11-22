import { Outlet } from "react-router-dom";
import Sidebar from "./adminComps/Sidebar";

const Admin = () => {
    return (
        <div className="bg-olive grid grid-cols-4">
            <div className="col-span-1">
                <Sidebar></Sidebar>
            </div>
            <div className="col-span-3">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Admin;