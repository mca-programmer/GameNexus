import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router";
import PageTransition from "../components/PageTransition";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f1724] text-[#e6f0ff]">
      <main className="flex-1">
        <PageTransition>
          <Outlet></Outlet>
        </PageTransition>
      </main>
    </div>
  );
};

export default AuthLayout;
