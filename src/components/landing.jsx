import React, { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import Header from "./header";

const Landing = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    fetch("/assets/portfolio_data.json")
      .then((response) => response.json())
      .then((data) => setPortfolioData(data.basic_info))
      .catch((error) => console.error("Error loading portfolio data:", error));
  }, []);

  return (
    <div className="flex flex-col justify-center  w-screen h-screen bg-bg-main-card">
      <div className="flex-col">
        <div className="flex justify-center">
          <FaLaptopCode size={150} />
        </div>
        <h1 className="flex justify-center text-4xl font-semibold">
          {portfolioData?.name || "Loading..."}
        </h1>
      </div>
      <div>
        <Header sharedData={portfolioData} className="h-50px" />
      </div>
    </div>
  );
};

export default Landing;
