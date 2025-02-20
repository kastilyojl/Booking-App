import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import NavBar from "../../components/NavBar";

export default function Layout({ children }) {
  const [sideBar, setSidebar] = useState(false);

  const toggleSideBar = (e) => {
    e.preventDefault();
    setSidebar((prev) => !prev);
  };

  return (
    <div className="grid md:grid-cols-[auto_1fr] ">
      {/* SideBar */}
      <div className="hidden md:block h-screen sticky top-0 bottom-0">
        <Sidebar sideBar={sideBar} />
      </div>

      <div>
        {/* Navbar */}
        <div className="sticky top-0 shadow">
          <NavBar toggleSideBar={toggleSideBar} />
        </div>

        {/* Main Content */}
        <main className="bg-slate-100">{children}</main>
      </div>
    </div>
  );
}
