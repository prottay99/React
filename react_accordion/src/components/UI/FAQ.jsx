import { useState } from "react";

export const FAQ = ({ curData, onToggle, isActive }) => {
  const { question, answer } = curData;

  return (
    <li className="single_faq">
      <div>
        <p>{question}</p>
        <button className={isActive ? "active-btn" : "btn"} onClick={onToggle}>
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      <p>{isActive && answer}</p>
    </li>
  );
};
