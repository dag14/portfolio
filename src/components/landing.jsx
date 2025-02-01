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
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-bg-main-card">
      <div className="flex-col">
        <FaLaptopCode
          size={130}
          className="flex justify-center m-2 text-text-charcoal-gray"
        />
      </div>

      <h1 className="flex justify-center text-4xl font-semibold">
        {portfolioData?.name || "Loading..."}
      </h1>

      <Header sharedData={portfolioData} className="h-50px" />
    </div>
  );
};

export default Landing;
