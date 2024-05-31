import React from "react";
import Navbar from "./Navbar";
import Disclaimer from "./Disclaimer";

const Footer = () => {
  return (
    <div className="bg-[#12164B]">
      <div className="flex flex-col gap-10 py-10 border-b border-black">
        <h1 className="text-[#0C8CFF] text-center text-4xl ">
          Sign Up for our Newsletter
        </h1>
        <div className="w-fit mx-auto">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://adprompt.us17.list-manage.com/subscribe/post?u=ae4bf6d4d3e03a4b960f4ff36&amp;id=b4f9a4c85f&amp;f_id=00f8c2e1f0"
            className="bg-[#767676] text-white py-2 px-3 text-sm rounded"
          >
            Sign Up
          </a>
        </div>
      </div>

      <div className="">
        <div className="flex gap-5 py-6 max-w-[1000px] mx-auto justify-center">
          <Disclaimer />
        </div>
      </div>
      <div className="border-t border-black ">
        <div className="flex gap-5 py-3 max-w-xl mx-auto justify-center">
          <a href="/legal">
            Legal Disclaimer / Privacy Policy / Terms & Conditions
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
