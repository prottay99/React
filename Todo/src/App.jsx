import { useEffect, useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import { nanoid } from "nanoid";
import ShowTasks from "./components/ShowTasks";
import Filter from "./components/Filter";
import Buttons from "./components/Buttons";

function App() {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState("all");

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      createdAt: new Date(),
      id: nanoid(),
    };
    setTasks([task, ...tasks]);
  };

  const editTask = (newText, id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTask);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const toggleComplete = (id) => {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
      return task;
    });
    setTasks(newTask);
  };

  const handleVisibility = (text) => {
    setVisibility(text);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-green-600 mb-[50px]">ToDo App</h1>
      <Buttons />
      <CreateTask addNewTask={addNewTask} />
      <ShowTasks
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
