"use client";
import Link from "next/link";
import React from "react";
import {
  FaMediumM,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const handleDownload = async () => {
    try {
      const res = await fetch("/white-paper.pdf");
      if (res.ok) {
        // Create a temporary link and click it to trigger the download
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "white-paper.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error("Failed to download file");
      }
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  return (
    <div className="max-w-5xl mx-auto w-full bg-transparent bg-cover overflow-hidden px-5">
      <div className="flex items-center justify-between py-5">
        <a href="https://adtoken.com/" className="logo">
          <img width={50} src="/logo.svg" alt="" srcSet="" />
        </a>
        <div className="flex gap-5 items-center">
          <Link
            href={"/"}
            className="text-white font-medium  border-b-2 border-[#0071BC] py-2 text-sm"
          >
            Mission Control
          </Link>
          <div
            onClick={() => handleDownload()}
            // target="_blank"
            // href={"https://adtoken.com/uploads/white-paper.pdf"}
            className="text-white  py-2 text-sm cursor-pointer"
          >
            White Paper
          </div>
          <div className="flex gap-2">
            <div className="rounded-md w-5 h-5 bg-gray-200 hover:bg-white text-black flex items-center justify-center cursor-pointer transform -rotate-12">
              <a
                href="https://twitter.com/ad_chain"
                target="_blank"
                className="rotate-12"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="rounded-md w-5 h-5 bg-gray-200 hover:bg-white text-black flex items-center justify-center cursor-pointer transform -rotate-12">
              <a
                href="https://medium.com/@AdChain"
                target="_blank"
                className="rotate-12"
              >
                <FaMediumM />
              </a>
            </div>
            <div className="rounded-md w-5 h-5 bg-gray-200 hover:bg-white text-black flex items-center justify-center cursor-pointer transform -rotate-12">
              <a
                href="https://www.reddit.com/r/adChain/"
                target="_blank"
                className="rotate-12"
              >
                <FaRedditAlien />
              </a>
            </div>
            <div className="rounded-md w-5 h-5 bg-gray-200 hover:bg-white text-black flex items-center justify-center cursor-pointer transform -rotate-12">
              <a
                href="http://t.me/adchain"
                target="_blank"
                className="rotate-12"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
