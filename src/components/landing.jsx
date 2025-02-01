import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Header from "./header";

const Landing = ({ portfolioData }) => {
  return (
    <div className="flex flex-col justify-center w-full h-screen bg-bg-main-card">
      <div className="flex-col">
        <div className="flex justify-center">
          <FaLaptopCode size={150} />
        </div>
        <h1 className="flex justify-center text-4xl font-semibold">
          {portfolioData?.name || "Loading..."}
        </h1>
      </div>
      <div>
        {/* Pass portfolioData to Header */}
        <Header sharedData={portfolioData} className="h-50px" />
      </div>
    </div>
  );
};

export default Landing;
