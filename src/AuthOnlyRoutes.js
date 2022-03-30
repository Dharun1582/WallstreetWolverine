import React from "react";
import {useNavigate, Navigate, Outlet } from "react-router-dom";
// import { showErrorToastNotification } from "./components/ToastNotification";
import { ReactNotifications, Store } from 'react-notifications-component'


const showMessage = (title, type) => {
  Store.addNotification({
      title: title,
      type: type,
      insert: "bottom",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
          duration: 3000,
          onScreen: true
      }
  })
}


function AuthOnlyRoutes({ auth }) {


  // showMessage("Login to view profile",'danger');

  const handleRouteRender = () => {
    if (auth) {
      // console.log("dckjbsd");
      return <Outlet />;
    } else {
      console.log("dddd");
      return <Navigate to={"/login"} />;
    }
  };
  return handleRouteRender();
}

export default AuthOnlyRoutes;
