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
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Market from "./pages/Market/Market";
import StockMain from "./pages/StockMain/StockMain";
const StyledApp = styled.div``;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
          <Router>
            <Navbar />
            <AllRoutes />
          </Router>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/market" element={<Market />} />
      <Route path="/stock/:name" element={<StockMain />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
