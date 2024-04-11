import React from "react";
import { Nav } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
    const auth = localStorage.getItem('user');
    return auth ? <Outlet /> : <Navigate to='/Authform' />;
}

export default PrivateComponent;
    