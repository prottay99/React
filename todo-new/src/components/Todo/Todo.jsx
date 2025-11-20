import React, { useState } from "react";
import "./Todo.css";
import { TiTick } from "react-icons/ti";
import { IoTrashBinOutline } from "react-icons/io5";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    if (todos.includes(input)) {
      setInput("");
      return;
    }

    setTodos((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <div className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={input}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              ADD
            </button>
          </div>
        </form>
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
                <button className="delete-btn">
                  <IoTrashBinOutline />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
