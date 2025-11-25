import "./App.css";
import DarkLight from "./components/themeSwitcher/DarkLight";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </>
  );
}

export default App;
