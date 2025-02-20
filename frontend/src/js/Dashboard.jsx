import React from "react";
import Layout from "./Layout/Layout";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <Layout>
      <main className="sm:p-6">
        <Outlet />
      </main>
    </Layout>
  );
}
