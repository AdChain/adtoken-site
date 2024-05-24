import TabContainer from "./TabContainer";
import type { Tab } from "./types";

const Tabs = ({ propTabs }: { propTabs: Tab[] }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="w-3/4 ">
        <TabContainer
          tabs={propTabs}
          contentClassName="bg-[#1B2040] h-[600px] rounded-[20px] w-full mt-12 shadow-xl"
          containerClassName="h-full w-full flex flex-col sm:flex-row gap-y-4 justify-center gap-x-12"
          activeTabClassName="!bg-[#1B2040] !rounded-[5px]"
          tabClassName="w-[180px] border-2 cursor-pointer h-10 !text-center border-gray-500  hover:border-white rounded-[5px] text-[13px] "
        />
      </div>
    </div>
  );
};

export default Tabs;
