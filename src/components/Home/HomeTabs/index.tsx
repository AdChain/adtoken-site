import Tabs from "@/components/common/Tabs/Tabs";
import type { Tab } from "@/components/common/Tabs/types";
import SepoliaRover from "./SepoliaRover";
import RefuelingStage from "./RefuelingStage";
import Colonization from "./Colonization";

const HomeTabs = () => {
  const propTabs: Tab[] = [
    {
      title: "AdChain Development",
      value: "dev",
      content: <SepoliaRover />,
    },
    {
      title: "Research & Development",
      value: "rnd",
      content: <RefuelingStage />,
    },
    {
      title: "AI Colonization",
      value: "colonization",
      content: <Colonization />,
    },
  ];
  return <Tabs propTabs={propTabs} />;
};

export default HomeTabs;
