"use client";
import React, { useEffect, useState } from "react";

const VoyageHome = () => {
  useEffect(() => {
    // Define function to load the animation
    const loadAnimation = async () => {
      // Define the JSON file path
      const jsonfile = "/voyage-home.json"; // Adjust the path to your JSON file

      // Make AJAX request to fetch JSON data
      const response = await fetch(jsonfile);
      const json = await response.json();
      // Initialize animation
      const container: any = document.getElementById("voyage-home-animation");
      // @ts-ignore
      const comp = new SVGAnim(json, 100, 100, 24);
      container.appendChild(comp.s.node);
    };

    // Call the function to load the animation
    loadAnimation();
  }, []);
  return (
    <>
      <div id="voyage-home-animation"></div>
    </>
  );
};

export default VoyageHome;
