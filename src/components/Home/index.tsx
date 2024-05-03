import React from "react";
import Hero from "../hero";
import { SparklesCore } from "../common/sparkles";
import RinkeybyRover from "./RinkeybyRover";
import Timeline from "../timeline";

const Home = () => {
  return (
    <>
      <div className="w-full absolute inset-0 h-screen pointer-events-none -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={5}
          particleColor="#fff"
        />
      </div>
      <div className="mt-[70px]">
        <Hero />
      </div>
      <div className="bg-[#000422] pb-10 pt-16">
          <RinkeybyRover />
          <Timeline/>
        </div>
    </>
  );
};

export default Home;
