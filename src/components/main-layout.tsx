import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <div className="px-3 pb-12 sm:p-0">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
