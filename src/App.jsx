import React, { useState, useEffect } from "react";
import Landing from "./components/landing";
import About from "./components/about";

const App = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [resumeData, setResumeData] = useState(null);

  // Fetch portfolio data
  useEffect(() => {
    fetch("/assets/portfolio_data.json")
      .then((response) => response.json())
      .then((data) => setPortfolioData(data.basic_info))
      .catch((error) => console.error("Error loading portfolio data:", error));
  }, []);

  // Fetch resume data
  useEffect(() => {
    fetch("/assets/resume_data.json")
      .then((response) => response.json())
      .then((data) => setResumeData(data.basic_info))
      .catch((error) => console.error("Error loading resume data:", error));
  }, []);

  return (
    <div>
      {/* Pass portfolioData as a prop to Landing */}
      <Landing portfolioData={portfolioData} />
      {/* Pass both portfolioData and resumeData as props to About */}
      <About sharedBasicInfo={portfolioData} resumeBasicInfo={resumeData} />
    </div>
  );
};

export default App;
