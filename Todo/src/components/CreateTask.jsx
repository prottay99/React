import React, { useState } from "react";

const CreateTask = ({ addNewTask }) => {
  const [text, setText] = useState("");

  return (
    <div className="flex items-center gap-5 justify-center mb-[50px]">
      <input
        type="text"
        placeholder="Enter your task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-white border px-5 py-2 rounded-full w-[400px]"
      />
      <button
        onClick={() => {
          if (text) {
            addNewTask(text);
            setText("");
          } else {
            alert("Enter your task");
          }
        }}
        className="px-8 py-2 bg-green-500 rounded-full cursor-pointer"
      >
        ADD
      </button>
    </div>
  );
};

export default CreateTask;
