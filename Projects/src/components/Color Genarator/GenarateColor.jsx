import { useState } from "react";

export const GenarateColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleGenerateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }

    setColor(hexColor);
  };
  // const handleGenerateRandomRgbColor = () => {};

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        textAlign: "center",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => () => setTypeOfColor("rgb")}>
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleGenerateRandomHexColor
            : handleGenerateRandomRgbColor
        }
      >
        Generate random color
      </button>

      <h1>{color}</h1>
    </div>
  );
};
