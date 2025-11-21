import React, { useEffect, useState } from "react";
import "./Todo.css";
import { TiTick } from "react-icons/ti";
import { IoTrashBinOutline } from "react-icons/io5";
import TodoForm from "./TodoForm";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [dateTime, setDateTime] = useState("");

  // input comes form TodoForm by stateLifting
  const getInput = (input) => {
    if (todos.includes(input)) return;
    setTodos((prev) => [input, ...prev]);
  };

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!input) return;

  //   if (todos.includes(input)) {
  //     setInput("");
  //     return;
  //   }

  //   setTodos((prev) => [...prev, input]);
  //   setInput("");
  // };

  // Date and time functionality

  // const interval = setInterval(() => {
  //   const now = new Date();
  //   const date = now.toLocaleDateString();
  //   const time = now.toLocaleTimeString();
  //   setDateTime(`${date} - ${time}`);
  // }, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setDateTime(`${date} - ${time}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // delete a todo
  const handleDelete = (currTodo) => {
    const newtodos = todos.filter((todo) => todo !== currTodo);
    setTodos(newtodos);
  };

  // clear all todos
  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <div className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <div>
        <h2 className="date-time">{dateTime}</h2>
      </div>
      <div className="form">
        <TodoForm getInput={getInput} />
      </div>

      <div className="myUnOrdList">
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{todo}</span>
                <button className="check-btn">
                  <TiTick />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(todo)}
                >
                  <IoTrashBinOutline />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <button className="clear-btn" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Todo;
