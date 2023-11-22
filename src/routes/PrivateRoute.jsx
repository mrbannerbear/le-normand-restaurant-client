/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider)
    const location = useLocation()
  
    if(user){
        return children
    }
    
    if(loading){
        return <div className="min-h-screen bg-olive-50 flex justify-center items-center">
            <div className="text-center">
                <h4>Loading</h4>
            </div>
        </div>
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;
