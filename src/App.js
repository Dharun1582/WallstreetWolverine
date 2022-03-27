import "./App.css";
import "./fonts.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import UnAuthOnlyRoutes from "./UnAuthOnlyRoutes";
import { AnimatePresence } from "framer-motion";
import React, { useState, createContext, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles } from "./themes";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import Instructions from "./pages/Instructions/Instructions";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Market from "./pages/Market/Market";
import StockMain from "./pages/StockMain/StockMain";
import Rules from './pages/Rules/Rules'
import SimpleLoader from "./components/SimpleLoader/SimpleLoader";
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import "animate.css"
import { isAuthDataStored } from "./utils/localStorageHelper";

const StyledApp = styled.div``;

export const Auth = React.createContext();
export const SetAuth = React.createContext();

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (isAuthDataStored()) {
      setAuth(true);
    } else {
      setAuth(false);
    }

    return () => { };
  }, []);

  return (
    <Auth.Provider value={auth}>
      <SetAuth.Provider value={setAuth}>

      
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
          <Router>
            <Navbar />
            <ReactNotifications />
            <AllRoutes auth={auth}/>
          </Router>
        </div>
      </StyledApp>
    </ThemeProvider>
        </SetAuth.Provider>
    </Auth.Provider>
    
  );
}

const AllRoutes = ({ auth }) => {
  const location = useLocation();
  console.log(auth);
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname} initial={false}>
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<UnAuthOnlyRoutes auth={auth} />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/market" element={<Market />} />
      <Route path="/stock/:name" element={<StockMain />} />
      <Route path="/stock" element={<StockMain />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/rules" element={<Rules />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
    </AnimatePresence>  
  );
};

export default App;
