import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { showErrorToastNotification } from "./components/ToastNotification";

function AuthOnlyRoutes({ auth }) {
  const handleRouteRender = () => {
    if (auth) {
      // console.log("dckjbsd");
      return <Outlet />;
    } else {
      // console.log("dddd");

      return <Navigate to={"/market"} />;
    }
  };
  return handleRouteRender();
}

export default AuthOnlyRoutes;
