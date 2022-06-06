import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/App";
import { LoginPage } from "./pages/Login";
import { UserPage } from "./pages/Profile";

export default function MainRoutes() {
  return(
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile" element={<UserPage/>}/>
      </Routes>
  );
}