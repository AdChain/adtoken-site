import Tabs from "@/components/common/Tabs/Tabs";
import type { Tab } from "@/components/common/Tabs/types";
import SepoliaRover from "./SepoliaRover";
import RefuelingStage from "./RefuelingStage";
import Colonization from "./Colonization";

const HomeTabs = () => {
  const propTabs: Tab[] = [
    {
      title: "Rinkeyby Rover",
      value: "all",
      content: <SepoliaRover />,
    },
    {
      title: "Refueling Stage",
      value: "active",
      content: <RefuelingStage />,
    },
    {
      title: "Ethereum Colonization",
      value: "upcoming",
      content: <Colonization />,
    },
  ];
  return <Tabs propTabs={propTabs} />;
};

export default HomeTabs;
