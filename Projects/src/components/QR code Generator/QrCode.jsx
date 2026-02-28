import { useState } from "react";
import QRCode from "react-qr-code";

export const QrCode = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleQrCodeGenerator = () => {
    setQrCode(input);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQrCodeGenerator}
        >
          Generate
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <QRCode id="qr-code-value" value={qrCode} size={200} bgColor="#fff" />
      </div>
    </div>
  );
};
