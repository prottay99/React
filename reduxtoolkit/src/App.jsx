import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="text-3xl bg-amber-600 p-3">Redux Toolkit</div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
