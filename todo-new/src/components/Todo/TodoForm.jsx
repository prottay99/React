import React, { useState } from "react";

const TodoForm = ({ getInput }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    getInput(input);

    // if (todos.includes(input)) {
    //   setInput("");
    //   return;
    // }

    // setTodos((prev) => [...prev, input]);

    setInput("");
  };

  return (
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
  );
};

export default TodoForm;
