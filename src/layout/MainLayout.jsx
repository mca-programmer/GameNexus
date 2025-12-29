import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../pages/Loading";
import PageTransition from "../components/PageTransition";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="flex flex-col min-h-screen bg-[#0f1724] text-[#e6f0ff]">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        {state == "loading" ? (
          <Loading />
        ) : (
          <PageTransition>
            <Outlet />
          </PageTransition>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
