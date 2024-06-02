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
            canvasStyle="h-[600px] w-full md:h-[800px]"
            containerClassName="!h-[400px] relative w-screen mb-24 sm:mb-0"
            colors={["#5A3D9A", "#335EAF"]}
          >
            <div className="hidden xl:block">
              <TextGenerate
                words="By owning the means of production, we will own the future of AI"
                className="!font-light text-3xl sm:!text-[48px]  px-4 !text-center"
              />
            </div>
            <div className="hidden lg:block xl:hidden">
              <TextGenerate
                words="By owning the means of production,"
                className="!font-light text-3xl sm:!text-[48px]  px-4 !text-center"
              />
              <TextGenerate
                words="we will own the future of AI"
                className="!font-light text-3xl sm:!text-[48px]  px-4 !text-center"
              />
            </div>
            <div className="hidden md:block lg:hidden">
              <TextGenerate
                words="By owning the means of "
                className="!font-light text-3xl sm:!text-[48px]  px-4 !text-center"
              />
              <TextGenerate
                words="production, we will own"
                className="!font-light text-3xl sm:!text-[48px]  px-4 !text-center"
              />
              <TextGenerate
                words="the future of AI"
                className="!font-light text-3xl sm:!text-[48px]  px-4 !text-center"
              />
            </div>
            <div className="block sm:block md:hidden">
              <TextGenerate
                words="By owning the means of"
                className="!font-light text-3xl sm:!text-[48px]  px-4 !text-center"
              />
              <TextGenerate
                words="production, we will own"
                className="!font-light text-3xl sm:!text-[48px]  px-4 !text-center"
              />
              <TextGenerate
                words="the future of AI"
                className="!font-light text-3xl sm:!text-[48px]  px-4 !text-center"
              />
            </div>
          </WavyBackground>
        </div>
        <div className="flex justify-center mb-16 relative md:mt-44 z-50">
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
                className="border-2 font- cursor-pointer my-5 h-10 w-full  flex justify-center border-gray-500 hover:scale-105  hover:border-white rounded-[5px] px-6 py-2 text-[13px] "
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
                className="border-2  cursor-pointer my-5 h-10 w-full  flex justify-center border-gray-500 hover:border-[#ffffff] hover:scale-105 rounded-[5px] px-6 py-2 text-[13px] "
              >
                <span className=" font-medium" rel="noreferrer noopener ">
                  Origin Story
                </span>
              </a>
              <a
                target="_blank"
                href="http://eepurl.com/iHFz1k"
                className="border-2 my-5 cursor-pointer titillium-web-extralight h-10 flex justify-center w-full hover:scale-105 mx-auto border-gray-500 hover:border-white rounded-[5px] px-7 py-2 text-[13px]"
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
          <div className="hidden md:block">
            <div className="pointer-events-none absolute top-0 sm:-top-32 md:block hidden md:-top-[0%] right-[20%] md:right-[23%] -z-10 ">
              <img
                src="/world_from_moon.png"
                alt=""
                className="w-[100px]  h-full"
              />
            </div>
            <div className="pointer-events-none absolute md:top-[10%] top-[20px] sm:top-[700px] left-[1.5%] -z-10 ">
              <img
                src="/moon_bg_dark.png"
                alt=""
                className="md:w-[90vw] h-full"
              />
              <div className="absolute inset-0 bg-black opacity-[30%]"></div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-full flex justify-center m-6 sm:mx-0">
          <TokenGraph />
        </div>
      </div>

      <div className="h-full mt-12 relative w-full flex flex-col items-center justify-center">
        <div className="h-full md:w-[1000px] w-full px-4 sm:mx-0">
          {/* <HomeTabs /> */}
          <SepoliaRover />
          <RefuelingStage />
          <Colonization />
        </div>
      </div>
      <div className="flex flex-col mb-10 md:mb-12 md:mt-12 mt-10 md:mx-5 mx-4 justify-center items-center md:scale-100 scale-90">
        <div className="scrollMore animated fadeInUp my-4 mx-auto"></div>
        <svg
          width=""
          height="56"
          className="adTokenLunarscapeLogo md:w-[400px] w-[270px]"
          viewBox="0 0 600 86"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>Artboard 2</title>
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
              <stop stop-color="#838383" offset="0%"></stop>
              <stop stop-color="#FAFAFA" offset="100%"></stop>
            </linearGradient>
            <path
              d="M3.87 62h21.923v-2.412H6.75v-21.6H3.87V62zm79.764-24.012v15.804c0 3.024-.072 3.42-.72 4.32-.972 1.332-2.916 1.62-10.548 1.62-9.036 0-10.548-.396-11.124-2.916-.144-.576-.144-.792-.144-3.024V37.988h-2.88v16.308c0 1.656 0 2.232.072 2.808.144 1.404.576 2.376 1.44 3.204 1.584 1.512 4.32 1.944 12.636 1.944 10.188 0 12.672-.684 13.788-3.708.288-.864.36-1.584.36-4.248V37.988h-2.88zM121.314 62h2.88V40.04L146.875 62h4.645V37.988h-2.88v21.96l-22.68-21.96h-4.645V62zm88.514-5.4h-19.656l-3.168 5.4H183.8l14.148-24.012h4.068L216.164 62h-3.168l-3.168-5.4zm-1.368-2.268L200 40.004l-8.46 14.328h16.92zM247.15 62V37.988h19.8c3.635 0 5.327.468 6.587 1.836.972 1.08 1.476 2.916 1.476 5.508 0 3.888-.9 5.256-3.852 5.94 2.45.468 3.385 1.728 3.385 4.5V62h-2.88v-4.572c.072-4.14-.972-5.148-5.148-5.112H250.03V62h-2.88zm2.88-11.952h15.803c4.932 0 6.192-.972 6.192-4.86 0-3.816-1.296-4.788-6.372-4.788H250.03v9.648zm58.596 4.464v1.656c0 2.592 1.188 4.428 3.348 5.184 1.944.648 4.68.9 10.512.9 5.544 0 8.28-.252 10.044-.9 2.376-.9 3.492-2.88 3.492-6.192 0-2.988-.792-4.608-2.736-5.544-1.728-.828-3.384-.972-11.016-1.008-6.804-.036-7.884-.108-9.144-.684-1.008-.468-1.476-1.404-1.476-3.06 0-3.852 1.836-4.608 11.304-4.608 4.86 0 7.344.36 8.46 1.224.792.612 1.116 1.476 1.152 3.384h2.808c-.108-3.348-.648-4.608-2.412-5.688-1.656-1.044-4.5-1.44-10.044-1.44-4.932 0-8.1.288-10.152.9-2.844.828-4.14 2.88-4.14 6.48 0 2.376.576 3.708 2.016 4.68 1.476.972 3.348 1.296 7.704 1.332 10.728.072 10.872.072 12.456.504 1.62.468 2.232 1.368 2.232 3.384 0 3.996-1.692 4.716-11.088 4.716-4.32 0-6.984-.216-8.388-.684-1.548-.504-2.052-1.476-2.052-3.888v-.648h-2.88zm86.713-.576v1.368c0 4.032-1.117 4.428-11.917 4.428-6.732 0-8.568-.288-9.72-1.476-1.008-1.044-1.26-2.772-1.26-8.244 0-9.72.072-9.756 11.592-9.756 10.08 0 11.088.432 11.088 4.68v.612h2.808c-.107-3.816-.61-5.328-2.23-6.444-1.477-1.08-3.565-1.368-9.577-1.368-9.9 0-11.88.18-13.716 1.332-2.448 1.548-2.952 3.456-2.952 10.944 0 6.552.36 8.46 1.908 10.044 1.764 1.836 3.888 2.196 12.564 2.196 3.24 0 7.344-.144 8.712-.252 2.195-.252 3.383-.756 4.283-1.836.936-1.08 1.224-2.34 1.224-5.22v-1.008h-2.808zm59.64 2.664h-19.656l-3.168 5.4h-3.204L443.1 37.988h4.068L461.316 62h-3.168l-3.168-5.4zm-1.368-2.268l-8.46-14.328-8.46 14.328h16.92zM492.302 62V37.988h19.367c3.78 0 5.255.36 6.407 1.584 1.044 1.08 1.44 2.628 1.44 5.508 0 3.528-.468 5.004-1.908 6.156-1.19.936-2.7 1.332-5.293 1.332H495.18V62h-2.88zm2.88-11.844h15.01c5.185 0 6.337-.9 6.337-4.896 0-3.888-1.153-4.86-5.76-4.86h-15.59v9.756zM552.985 62h24.084v-2.412h-21.204v-8.892h20.268v-2.268h-20.268V40.4h21.024v-2.412h-23.904V62z"
              id="b"
            ></path>
            <filter
              x="-1.2%"
              y="-20.4%"
              width="102.4%"
              height="157.1%"
              filterUnits="objectBoundingBox"
              id="a"
            >
              <feOffset
                dy="2"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="2"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                in="shadowBlurOuter1"
              ></feColorMatrix>
            </filter>
            <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="d">
              <stop stop-color="#838383" offset="0%"></stop>
              <stop stop-color="#FAFAFA" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd" opacity=".633">
            <g transform="translate(9 9)">
              <use
                fill="#000"
                filter="url(#a)"
                xlinkHref="/web/20180625011051im_/https://adtoken.com/#b"
              ></use>
              <use
                fill="url(#c)"
                xlinkHref="/web/20180625011051im_/https://adtoken.com/#b"
              ></use>
            </g>
            <path
              d="M198.65 16.863h2v-15h8.45V.188h-18.926v1.675h8.475v15zm14.488 0h1.775v-6.95c0-2.575 1.525-3.5 5.8-3.5 3.95 0 4.825.55 4.825 3.1v7.35h1.775v-7.45c0-1.9-.375-2.9-1.325-3.6-.95-.675-2.225-.925-4.775-.925-2.675 0-4 .2-4.9.7-.725.425-1.125.925-1.4 1.8V.038h-1.775v16.825zm34.213-5.575h-13.1c0 2.025.15 2.6.75 3.25.776.825 1.676 1 5 1 4.2 0 5.25-.425 5.5-2.225h1.826c-.075 1.075-.375 1.775-1 2.375-1 1-2.675 1.35-6.425 1.35-3.424 0-5.1-.325-6.074-1.175-1.025-.9-1.45-2.35-1.45-4.9 0-2.575.425-4.025 1.45-4.925.975-.85 2.65-1.175 6.05-1.175 3.975 0 5.6.425 6.55 1.75.7.95.95 2.125.925 4.675zm-13.1-1.45h11.226c-.025-.95-.1-1.425-.35-1.925-.675-1.25-1.65-1.55-5.25-1.55-3.625 0-4.625.3-5.275 1.55-.25.475-.324.925-.35 1.925zm27.654-1.375h-1.9c.025-1.55.4-2.375 1.3-2.9.95-.55 2.025-.7 5.1-.7 4.025 0 5.275.2 6.325 1.025.874.7 1.124 1.5 1.124 3.675v7.3h-1.775v-1.6c-.6 1.5-1.5 1.775-5.55 1.775-3.926 0-5.026-.125-5.876-.75-.875-.6-1.2-1.4-1.2-2.95 0-1.45.325-2.375 1.025-2.85.85-.575 2.274-.775 5.75-.775 2.774 0 3.85.1 4.55.375.674.275 1 .6 1.3 1.25v-1.25c0-3.425-.45-3.725-5.626-3.725-3.925 0-4.525.275-4.55 2.1zm4.85 2.75c-4.675 0-5.475.325-5.475 2.2 0 1.025.4 1.675 1.174 1.875.7.2 1.55.25 4.125.25 2.35 0 3.4-.075 4.1-.325 1-.325 1.424-.925 1.424-1.95 0-.775-.325-1.3-.975-1.65-.55-.275-1.8-.4-4.376-.4zm27.44 5.65h-1.776v-1.75c-.75 1.475-2.1 1.925-5.925 1.925-3.5 0-5.15-.325-6.125-1.175-1.025-.9-1.45-2.35-1.45-4.9 0-2.575.425-4.025 1.45-4.925.975-.85 2.65-1.175 6.125-1.175 3.825 0 5.175.45 5.925 1.925V.038h1.775v16.825zm-7.55-10.5c-3.276 0-4.45.25-5.126 1.05-.5.625-.725 1.75-.725 3.525 0 2 .275 3.15.925 3.75.675.625 1.925.85 4.9.85 3.225 0 4.45-.25 5.1-1.05.475-.625.725-1.75.725-3.475 0-4.075-.725-4.65-5.8-4.65zm19.238 10.5v-15h-8.475V.188h18.925v1.675h-8.45v15h-2zm17.914-12c3.625 0 5.25.3 6.25 1.175 1.025.925 1.45 2.35 1.45 5 0 2.475-.45 3.925-1.45 4.825-1 .875-2.625 1.175-6.25 1.175-3.6 0-5.225-.3-6.225-1.175-1.024-.9-1.45-2.35-1.45-4.925 0-2.55.426-4 1.45-4.9.976-.875 2.626-1.175 6.226-1.175zm.05 1.5c-3.275 0-4.475.25-5.125 1.05-.5.625-.724 1.75-.724 3.525 0 2 .275 3.15.925 3.75.676.625 1.926.85 4.9.85 3.226 0 4.426-.25 5.076-1.05.475-.625.725-1.75.725-3.475 0-2.05-.274-3.175-.924-3.8-.675-.625-1.925-.85-4.85-.85zm12.69 10.5h1.774v-5.575h1.025l8.325 5.575h2.925l-9.45-6.325 8.625-5.5h-2.975l-7.45 4.75h-1.025V.038h-1.775v16.825zm31.538-5.575h-13.1c0 2.025.15 2.6.75 3.25.775.825 1.675 1 5 1 4.2 0 5.25-.425 5.5-2.225h1.825c-.076 1.075-.376 1.775-1 2.375-1 1-2.676 1.35-6.426 1.35-3.425 0-5.1-.325-6.075-1.175-1.026-.9-1.45-2.35-1.45-4.9 0-2.575.424-4.025 1.45-4.925.974-.85 2.65-1.175 6.05-1.175 3.974 0 5.6.425 6.55 1.75.7.95.95 2.125.924 4.675zm-13.1-1.45H366.2c-.026-.95-.1-1.425-.35-1.925-.676-1.25-1.65-1.55-5.25-1.55-3.626 0-4.626.3-5.276 1.55-.25.475-.325.925-.35 1.925zm18.063 7.025h1.775v-6.95c0-2.575 1.575-3.525 5.825-3.525 3.975 0 4.85.575 4.85 3.125v7.35h1.775v-7.45c0-1.975-.375-3-1.325-3.725-.95-.725-2.25-.975-4.8-.975-4.3 0-5.55.525-6.325 2.675v-2.35h-1.775v11.825z"
              fill="url(#d)"
              transform="translate(9 9)"
            ></path>
            <path fill="#B1B1B1" d="M9 23h170v1H9zM416 23h170v1H416z"></path>
          </g>
        </svg>
        <h2 className="text-white font-medium text-center text-3xl ">
          Timeline
        </h2>
      </div>
      <div className="my-20 relative">
        <MissionComponent />
      </div>
    </>
  );
};

export default Hero;
