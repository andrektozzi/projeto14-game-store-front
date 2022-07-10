import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import  UserContext from "../context/UserContext";
import "../assets/styles/reset.css";
import GlobalStyle from "../assets/styles/globalStyles";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Cart from "./Cart";

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
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}