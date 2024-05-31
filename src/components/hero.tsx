"use client";
import React from "react";
import MissionComponent from "./Home/MissionComponent";
import { MdVerified } from "react-icons/md";
import { WavyBackground } from "./Home/WavyBackground";
import HomeTabs from "./Home/HomeTabs";
import TextGenerate from "./Home/TextGenerate";
import TokenGraph from "./Home/TokenGraph";
import SepoliaRover from "./Home/HomeTabs/SepoliaRover";
import RefuelingStage from "./Home/HomeTabs/RefuelingStage";
import Colonization from "./Home/HomeTabs/Colonization";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full flex justify-center">
          <WavyBackground
            containerClassName="!h-[400px] relative w-screen"
            colors={["#0C8DFF", "#12164B"]}
          >
            <TextGenerate
              words="By owning the means of production, we will own the future of AI"
              className="!font-extralight !text-[48px]  px-4 !text-center"
            />
          </WavyBackground>
        </div>
        <div className="flex justify-center mb-72 relative mt-44 z-20">
          <div>
            <div className="flex justify-center mx-5 md:mt-40 text-2xl  font-bold items-center">
              <div className="line h-[1px] grow bg-gray-500"></div>
              <p className="whitespace-nowrap flex px-3 heading-text">
                The adToken (ADT) <MdVerified size={12} fill="#1799DD" />
              </p>
              <div className="line h-[1px] grow bg-gray-500"></div>
            </div>
            <div className="flex justify-center md:mt-3 mx-auto md:w-full">
              <h1 className="md:text-4xl text-2xl px-8 sm:px-0">
                Official utility Token of AdChain and AdPrompt.Ai
              </h1>
            </div>
            <div className="md:mt-9  mt-10 md:flex gap-[90px] whitespace-nowrap mx-5">
              <a
                href="/white-paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                type="application/pdf"
                className="border-2 font- cursor-pointer my-5 h-10 w-full  flex justify-center border-gray-500  hover:border-white rounded-[5px] px-6 py-2 text-[13px] "
              >
                <span
                  className="text-white font-medium"
                  rel="noreferrer noopener titillium-web-extralight "
                >
                  Original Whitepaper
                </span>
              </a>
              <a
                href="https://medium.com/metax-publication"
                target="_blank"
                className="border-2  cursor-pointer my-5 h-10 w-full  flex justify-center border-gray-500 hover:border-[#54c8ff] hover:text-[#54c8ff] rounded-[5px] px-6 py-2 text-[13px] "
              >
                <span className=" font-medium" rel="noreferrer noopener ">
                  Origin Story
                </span>
              </a>
              <a
                target="_blank"
                href="https://t.me/adChain"
                className="border-2 my-5 cursor-pointer titillium-web-extralight h-10 flex justify-center w-full mx-auto border-gray-500 hover:border-white rounded-[5px] px-7 py-2 text-[13px]"
              >
                <span
                  className="text-white font-medium"
                  rel="noreferrer noopener"
                >
                  What's Next
                </span>
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute -top-32 md:block hidden md:-top-[0%] right-[20%] md:right-[23%] -z-10 ">
            <img
              src="/world_from_moon.png"
              alt=""
              className="w-[100px]  h-full"
            />
          </div>
          <div className=" pointer-events-none absolute md:top-[10%] top-[700px] left-[1.5%] -z-10 ">
            <img
              src="/moon_bg_dark.png"
              alt=""
              className="md:w-[90vw] h-full"
            />
            <div className="absolute inset-0 bg-black opacity-[30%]"></div>{" "}
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-full flex justify-center mt-40 m-6 sm:mx-0">
          <TokenGraph />
        </div>
      </div>

      <div className="h-full mt-40 mb-40 relative w-full flex flex-col items-center justify-center ">
        <div className="h-full w-[1000px]">
          {/* <HomeTabs /> */}
          <SepoliaRover />
          <RefuelingStage />
          <Colonization />
        </div>
      </div>
      <div className="my-80 relative">
        <MissionComponent />
      </div>
    </>
  );
};

export default Hero;
