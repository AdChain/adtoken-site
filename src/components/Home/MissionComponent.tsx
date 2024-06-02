import React from "react";
import MissionBox from "./MissionBox";
import VoyageHome from "./VoyageHome";
import Discovery from "./Discovery";
import Rocket from "./Rocket";

const MissionComponent = () => {
  return (
    <div className="md:flex max-w-5xl mx-auto relative grid grid-cols-2  p-0 fadeup">
      <div className="column md:ml-3 MissionBox grow flex justify-center items-center flex-col scale-75 md:scale-100  w-full  md:w-[15%] text-center">
        <h5 className="text-center text-white font-medium opacity-100 whitespace-nowrap">
          ADT Generation Event
        </h5>
        <div className="rounded-[70px] my-2 w-[140px]  h-[140px] relative block p-[15px] mx-auto bg-[#152d5559] ">
          <span className="rounded-[70px] m-auto  w-[110px] h-[110px] block bg-[#1290FF] overflow-hidden border-[5px] border-[#064D95] relative ">
            <Rocket />
          </span>
        </div>
        <h6 className="flex justify-center text-xs flex-col font-light text-white">
          Monday Jun-26-2017 03:37:06 PM +UTC
          <a href="https://etherscan.io/txs?block=3933451">block #3933451</a>
        </h6>
      </div>
      <div className="column MissionBox MissionConnector hidden grow md:inline-block p-[1rem] w-[6.25%]  scale-75 md:scale-100 text-center leading-[200px0]">
        <div className="h-[1px] w-full bg-[#064D95] mt-[100px]" />
      </div>
      <div className="column MissionBox longDate grow flex justify-center items-center flex-col  p-[1rem] scale-75 md:scale-100 w-full md:w-[15%] text-center leading-[200px0]">
        <h5 className="text-center text-white font-medium opacity-100 ">
          Discovery
        </h5>
        <div className="rounded-[70px] my-2 w-[140px] h-[140px] relative block p-[15px] mx-auto bg-[#152d5559] ">
          <span className="rounded-[70px] m-auto  w-[110px] h-[110px] block bg-[#1290FF] overflow-hidden border-[5px] border-[#064D95] relative ">
            <Discovery />
          </span>
        </div>
        <h6 className="flex justify-center text-xs flex-col font-light text-white">
          <p>AdChain Deployment</p>
          <p>
            April 23<sup>rd</sup> 2018{" "}
          </p>
        </h6>
      </div>
      <div className="column MissionBox MissionConnector hidden grow md:inline-block p-[1rem] w-[6.25%] scale-75 md:scale-100  text-center leading-[200px0]">
        <div className="h-[1px] w-full bg-[#064D95] mt-[100px]" />
      </div>
      <div className="column MissionBox longDate grow flex justify-center items-center flex-col  p-[1rem] scale-75 md:scale-100 w-full md:w-[15%] text-center leading-[200px0]">
        <h5 className="text-center text-white font-medium opacity-100 ">
          Voyage Home
        </h5>
        <div className="rounded-[70px] my-2 w-[140px] h-[140px] relative block p-[15px] mx-auto bg-[#152d5559] ">
          <span className="rounded-[70px] m-auto  w-[110px] h-[110px] block bg-[#1290FF] overflow-hidden border-[5px] border-[#064D95] relative ">
            <VoyageHome />
          </span>
        </div>
        <h6 className="flex justify-center text-xs flex-col font-light text-white">
          <p>Research & Development</p>
          <p>
            Sept. 14<sup>rd</sup> 2022{" "}
          </p>
        </h6>
      </div>
      <div className="column MissionBox MissionConnector hidden grow md:inline-block p-[1rem] w-[6.25%] scale-75 md:scale-100  text-center leading-[200px0]">
        <div className="h-[1px] w-full bg-[#064D95] mt-[100px]" />
      </div>
      <div className="column MissionBox longDate ActiveMission grow flex justify-center items-center flex-col  p-[1rem] w-full md:w-[15%] scale-75 md:scale-100 text-center leading-[200px0]">
        <h5 className="text-center text-white font-medium opacity-100 ">
          Colonization
        </h5>
        <div className="rounded-[70px] my-2 w-[140px] h-[140px] relative block p-[15px] mx-auto bg-[#152d5559] ">
          <span className="rounded-[70px] m-auto  w-[110px] h-[110px] block bg-[#1290FF] overflow-hidden border-[5px] border-[#064D95] relative ">
            <MissionBox />
          </span>
        </div>
        <h6 className="flex justify-center text-xs flex-col font-light text-white">
          <p>GenAI Integration</p>
          <p>2024 - Future </p>
        </h6>
      </div>
    </div>
  );
};

export default MissionComponent;
