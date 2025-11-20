import React, { useState } from "react";

const SingleTask = ({ task, deleteTask, editTask, toggleComplete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center bg-[#f3f3f3] text-black px-4 py-2 rounded-sm mb-2 justify-between">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            // onBlur={() => {
            //   editTask(newText, task.id);
            // }}
            className="border px-2 py-1 rounded"
          />
        ) : (
          <li
            key={task.id}
            className={
              task.isChecked
                ? "text-black list-none line-through"
                : "text-black list-none"
              // task.isCompleted ? "line-through" : "none"
            }
            onClick={() => toggleComplete(task.id)}
          >
            {task.text}
          </li>
        )}
      </div>

      <div className="flex items-center gap-3">
        {isEditing ? (
          <button
            className="text-black cursor-pointer bg-orange-400 p-2 rounded-lg"
            onClick={() => {
              editTask(newText, task.id);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="text-black cursor-pointer bg-orange-400 p-2 rounded-lg"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}

        <button
          className="cursor-pointer bg-red-600 text-white p-2 rounded-lg"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
