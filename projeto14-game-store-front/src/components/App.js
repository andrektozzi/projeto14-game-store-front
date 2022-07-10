import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import  UserContext from "../context/UserContext";
import "../assets/styles/reset.css";
import GlobalStyle from "../assets/styles/globalStyles";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import TheSimsPage from "./TheSimsPage";
import SportsPage from "./SportsPage";
import StarWarsPage from "./StarWarsPage";
import RPGPage from "./RPGPage";
import FPSPage from "./FPSPage";
import ActionPage from "./ActionPage";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/thesims" element={<TheSimsPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/starwars" element={<StarWarsPage />} />
          <Route path="/rpg" element={<RPGPage />} />
          <Route path="/fps" element={<FPSPage />} />
          <Route path="/action" element={<ActionPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}