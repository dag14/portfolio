import React, { useState, useEffect, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import Switch from "react-switch";

const Header = ({ sharedData }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [animationText, setAnimationText] = useState([]);

  const name = sharedData?.name || "Guest";

  const setTheme = useCallback(() => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }, [isDarkMode]);

  useEffect(() => {
    setTheme();
  }, [isDarkMode, setTheme]);

  // Fetch animation text from JSON file
  useEffect(() => {
    fetch("/assets/portfolio_data.json")
      .then((response) => response.json())
      .then((data) => {
        if (data.basic_info?.animation_text) {
          setAnimationText(data.basic_info.animation_text);
        }
      })
      .catch((error) => console.error("Error loading animation text:", error));
  }, []);

  return (
    <header className="h-50px flex items-center justify-center">
      <div className="text-center">
        <div className="my-5 text-xl text-text-charcoal-gray uppercase">
          {animationText.length > 0 && (
            <TypeAnimation
              sequence={animationText}
              speed={50}
              repeat={Infinity}
              cursor={false}
            />
          )}
        </div>
        <div>
          <Switch
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            offColor="#B8B8B8"
            onColor="#2C9C68"
            className="mx-auto"
            width={70}
            height={30}
            uncheckedIcon={
              <span className="text-lg pl-2 text-bg-main-card">☀️</span>
            }
            checkedIcon={
              <span className="text-lg pl-2 text-text-charcoal-gray">🦉</span>
            }
            id="icon-switch"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
