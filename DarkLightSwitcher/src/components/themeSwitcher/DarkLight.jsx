import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const DarkLight = () => {
  const { theme, handleToggle } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 flex flex-col justify-center items-center h-dvh ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h1
        className={`text-4xl mb-4 font-semibold ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {theme === "dark"
          ? "Dark version of website"
          : "Light version of website"}
      </h1>
      <p
        className={`text-2xl my-4 font-semibold ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Hello!! Welcome to React js - contextApi
      </p>
      <button
        onClick={handleToggle}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </button>
    </div>
  );
};

export default DarkLight;
