import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;
