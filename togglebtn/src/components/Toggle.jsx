import React, { useState } from "react";
import "../components/Toggle.css";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className="bg"
      onClick={handleToggleClick}
      style={{ backgroundColor: isOn ? "green" : "" }}
    >
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span>{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};

export default Toggle;
