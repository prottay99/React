import "./App.css";
import { Weather } from "./components/weather/Weather";

function App() {
  const API_KEY = "d291eb71b285612541fdb9836d0f88ce";

  return (
    <>
      <Weather API_KEY={API_KEY} />
    </>
  );
}

export default App;
