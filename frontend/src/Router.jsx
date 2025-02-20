import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./js/Register";
import User from "./js/Pages/User";
import Layout from "./js/Layout/Layout";
import Archieves from "./js/Pages/Archieves";
import Dashboard from "./js/Dashboard";
import Home from "./js/Pages/Home";
import Participants from "./js/Pages/Participants";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/participants" element={<Participants />}></Route>
        <Route path="/archieve" element={<Archieves />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}
