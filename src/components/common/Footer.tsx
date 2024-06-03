import React from "react";
import Navbar from "./Navbar";
import Disclaimer from "./Disclaimer";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-[#335EAF] w-full via-[#5A3D9A] to-[#5A3D9A] rounded-[5px]">
      <div className="flex flex-col gap-10 py-10 border-b border-black">
        <h1 className="text-white text-center text-4xl ">
          Sign Up for our Newsletter
        </h1>
        <div className="w-fit mx-auto">
          <a
            href="http://eepurl.com/iHFz1k"
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
            className="border-2 font- cursor-pointer my-5 h-10 w-full border-white flex justify-center hover:scale-105  hover:border-white rounded-[5px] px-6 py-2 text-[13px] "
          >
            <span
              className="text-white font-medium"
              rel="noreferrer noopener titillium-web-extralight "
            >
              Signup
            </span>
          </a>
        </div>
      </div>

      <div className="">
        <div className="flex gap-5 py-10 max-w-[1000px] mx-auto justify-center">
          <Disclaimer />
        </div>
      </div>
      <div className="border-t border-black w-full flex justify-center items-center">
        <div className="flex gap-5 py-10 max-w-xl w-full justify-center">
          <a
            href="/legal"
            className="text-xs sm:text-sm hover:underline whitespace-nowrap"
          >
            Legal Disclaimer
          </a>
          <div className="mx-1">/</div>
          <a
            href="/legal"
            className="text-xs sm:text-sm hover:underline whitespace-nowrap"
          >
            Privacy Policy
          </a>
          <div className="mx-1">/</div>
          <a
            href="/legal"
            className="text-xs sm:text-sm hover:underline whitespace-nowrap"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
      <div className="border-t border-black">
        <Navbar />
      </div>
    </div>
  );
};

export default Footer;
