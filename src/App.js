import "./App.css";
import "./fonts.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState, createContext, useEffect, useRef } from "react";
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
import Footer from "./components/Footer/Footer";
import Rules from './pages/Rules/Rules';
import Developer from "./pages/Developer/Developer";
import History from "./pages/History/History";
import SimpleLoader from "./components/SimpleLoader/SimpleLoader";
import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import "animate.css";
import { isAuthDataStored } from "./utils/localStorageHelper";
import AuthOnlyRoutes from "./AuthOnlyRoutes";

export const Auth = createContext();
export const SetAuth = createContext();

const StyledApp = styled.div``;

function App() {
  const [auth,setauth] = useState(false);
  
  useEffect(() => {
    if (isAuthDataStored()) {
      setauth(true);
    } else {
      console.log("asd");
      setauth(false);
    };
    console.log(auth);
  },[]);
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Auth.Provider value={auth}>
            <SetAuth.Provider value={setauth}>
        <div className="App">
          <Router>
            <Navbar />
            <ReactNotifications />
            <AllRoutes auth={auth} />
            <Footer />
          </Router>
        </div>
        </SetAuth.Provider>
      </Auth.Provider>
      </StyledApp>
    </ThemeProvider>
  );
}

const AllRoutes = ({auth}) => {
  const location = useLocation();
  return (
      <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route element={<UnAuthOnlyRoutes auth={auth} />}> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      {/* </Route> */}

      <Route element={<AuthOnlyRoutes auth={auth} />}>
        <Route path="/profile" element={<Profile />} />   
        <Route path="/stock/:name" element={<StockMain />} />
      </Route>
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/market" element={<Market />} />
      {/* <Route path="/stock" element={<StockMain />} /> */}
      <Route path="/history" element={<History />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/rules" element={<Rules />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/developer" element={<Developer />} />
    </Routes>
  );
};

export default App;
