"use client";
import Link from "next/link";
import React from "react";
import { BiLogoMediumOld } from "react-icons/bi";
import {
  FaMediumM,
  FaRedditAlien,
  FaRocketchat,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { LiaRocketchat } from "react-icons/lia";
import { MdCheck, MdOutlineContentCopy } from "react-icons/md";

const Navbar = () => {
  const [isCopiedContent, setIsCopiedContent] = React.useState<any>("");
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
  const copyToClipboard = (content: any) => {
    const Content = content;
    if (Content) {
      navigator.clipboard.writeText(Content);
      setIsCopiedContent([Content]);
      setTimeout(() => {
        setIsCopiedContent("");
      }, 2000);
    }
  };
  return (
    <div className="max-w-5xl mx-auto w-full bg-transparent bg-cover overflow-hidden">
      <div className="">
        <div className="md:hidden justify-end gap-2 m-2 flex"></div>
      </div>
      <div className="flex items-center justify-between md:py-4 md:pl-12 md:mx-0 mx-5">
        <div className="flex gap-2 items-center">
          <a href="https://adtoken.com/" className="logo">
            <img width={100} src="/logo-2.svg" alt="" srcSet="" />
          </a>
        </div>

        <div className="flex gap-x-2">
          <p>0xd0d6d6c5fe4a677d343cc433536bb717bae167dd</p>
          <div
            onClick={() =>
              copyToClipboard(
                "https://etherscan.io/token/0xd0d6d6c5fe4a677d343cc433536bb717bae167dd",
              )
            }
            className="cursor-pointer"
          >
            {isCopiedContent === "" ? (
              <MdOutlineContentCopy size={15} />
            ) : (
              <MdCheck size={15} />
            )}
          </div>
        </div>
        {/* <div className="flex gap-7 items-center">
          <Link
            href={"/"}
            className="text-white font-medium   border-b-2 border-[#0071BC] py-2 text-sm"
          >
            Mission Control
          </Link>
          <div
            onClick={() => handleDownload()}
            // target="_blank"
            // href={"https://adtoken.com/uploads/white-paper.pdf"}
            className="text-white font-medium md:mr-2 text-sm cursor-pointer"
          >
            White Paper
          </div>
          <div className="md:flex gap-3 hidden">
            <div className="rounded-md w-[21px] h-[21px] bg-gray-200 hover:bg-white text-black flex items-center justify-center cursor-pointer transform -rotate-12">
              <a
                href="https://twitter.com/ad_chain"
                target="_blank"
                className="rotate-12"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="rounded-md w-[21px] h-[21px] bg-gray-200 hover:bg-white text-black flex items-center justify-center cursor-pointer transform -rotate-12">
              <a
                href="https://medium.com/@AdChain"
                target="_blank"
                className="rotate-12"
              >
                <BiLogoMediumOld />
              </a>
            </div>
            <div className="rounded-md w-[21px] h-[21px] bg-gray-200 hover:bg-white text-black flex items-center justify-center cursor-pointer transform -rotate-12">
              <a
                href="https://www.reddit.com/r/adChain/"
                target="_blank"
                className="rotate-12"
              >
                <FaRedditAlien />
              </a>
            </div>
            <div className="rounded-md w-[21px] h-[21px] bg-gray-200 hover:bg-white text-black flex items-center justify-center cursor-pointer transform -rotate-12">
              <a
                href="http://t.me/adchain"
                target="_blank"
                className="rotate-12"
              >
                <FaRocketchat />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
