import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function UnAuthOnlyRoutes({ auth }) {
    const handleRouteRender = () => {
        if (!auth) {
            return <Outlet />;
        } else {
            return <Navigate to={"/profile"} />;
        }
    };
    return handleRouteRender();
}

export default UnAuthOnlyRoutes;
