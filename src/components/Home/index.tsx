import React from "react";
import Hero from "../hero";
import Timeline from "../timeline";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Hero />
        <div className="bg-[#000422]">
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default Home;
