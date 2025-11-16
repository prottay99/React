import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberchecked, setNumberchecked] = useState(false);
  const [symbolchecked, setSymbolchecked] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberchecked) str += "0123456789";
    if (symbolchecked) str += "!@#$%^&*()+-*/|";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberchecked, symbolchecked, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberchecked, symbolchecked, setPassword]);

  return (
    <div className="bg-gray-500 w-[40%] mx-auto rounded-xl p-4 my-8">
      <h1 className="text-4xl text-center text-white">Password Genarator</h1>
      <div className="w-full my-5">
        <input
          className="bg-white outline-0 p-3 w-[80%] text-xl text-orange-600 mr-3 rounded"
          type="text"
          placeholder="Password"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button
          className="cursor-pointer p-3 rounded bg-blue-600 text-white hover:bg-red-600 transition"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-4">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-white">Length: {length}</label>
        </div>
        <div className="flex gap-1">
          <input
            type="checkbox"
            name="numberType"
            defaultChecked={numberchecked}
            id="numberType"
            onChange={() => {
              setNumberchecked((prv) => !prv);
            }}
          />
          <label className="text-white" htmlFor="numberType">
            Number Type
          </label>
        </div>
        <div className="flex gap-1">
          <input
            type="checkbox"
            defaultChecked={symbolchecked}
            name="symbolType"
            id="symbolType"
            onChange={() => {
              setSymbolchecked((prv) => !prv);
            }}
          />
          <label className="text-white" htmlFor="symbolType">
            Symbol Type
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
