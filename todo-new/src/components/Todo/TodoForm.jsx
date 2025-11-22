import { nanoid } from "nanoid";
import React, { useState } from "react";

const init = {
  id: "",
  content: "",
  isChecked: false,
};

const TodoForm = ({ getInput }) => {
  const [input, setInput] = useState({ ...init });

  const handleChange = (e) => {
    // setInput({
    //   ...input,
    //   content: e.target.value,
    //   id: nanoid(),
    // });
    const value = e.target.value;

    setInput({ id: nanoid(), content: value, checked: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.content) return;
    getInput(input);
    // setInput({ id: "", content: "", checked: false });
    setInput({ ...init });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="todo-input"
          autoComplete="off"
          value={input.content}
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
