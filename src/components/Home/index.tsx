"use client";

import React from "react";
import Hero from "../hero";
import Timeline from "../timeline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SparklesCore } from "../common/sparkles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 1000 * 60,
    },
  },
});

const Home = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="w-full absolute inset-0 h-screen pointer-events-none -z-10">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={5}
            particleColor="#fff"
          />
        </div>
        <Hero />
        {/* <div className="bg-[#000422]">
          <Timeline />
        </div> */}
      </QueryClientProvider>
    </>
  );
};

export default Home;
