import React from "react";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <div className="bg-[#12164B]">
      <div className="flex flex-col gap-10 py-10 border-b border-black">
        <h1 className="text-[#0C8CFF] text-center text-4xl ">
          Sign Up for our Newsletter
        </h1>
        <div className="w-fit mx-auto">
          <button className="bg-[#767676] text-white py-2 px-3 text-sm rounded">
            Sign Up
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto py-16 max-w-4xl">
        <div className="flex flex-col justify-center items-center gap-8 md:border-r border-black md:col-span-1">
          <h1 className="text-white text-center text-md">
            Access the Help Center
          </h1>
          <div className="w-fit mx-auto">
            <a
              href="https://adchain.zendesk.com/hc/en-us"
              target="_blank"
              className="bg-[#767676] text-white py-2 px-3 text-sm rounded"
            >
              VIEW WALKTHROUGHS
            </a>
          </div>
        </div>
        <div className="flex mt-10 md:mt-0 flex-col justify-center items-center gap-8 md:border-r border-black md:col-span-1">
          <h1 className="text-[#0C8CFF] text-center text-md">
            Access the adChain Registry
          </h1>
          <div className="w-fit mx-auto">
            <a
              href="https://app.adchain.com/"
              target="_blank"
              className="bg-[#1E75C9] text-white py-2 px-3 text-sm rounded"
            >
              ACCESS DAPP
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 mt-10 md:mt-0 md:col-span-1">
          <h1 className="text-white text-center text-md">
            Join the adToken Lunarscape Conversation
          </h1>
          <div className="w-fit mx-auto">
            <a
              href="https://t.me/adChain"
              target="_blank"
              className="bg-[#767676] text-white py-2 px-3 text-sm rounded"
            >
              JOIN OUT TELEGRAM
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black">
        <Navbar />
      </div>
    </div>
  );
};

export default Footer;
