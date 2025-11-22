import React from "react";
import { TiTick } from "react-icons/ti";
import { IoTrashBinOutline } from "react-icons/io5";

const TodoItem = ({ todo, handleDelete, checked, handleChecked }) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>
        {todo.content}
      </span>
      <button className="check-btn" onClick={() => handleChecked(todo)}>
        <TiTick />
      </button>
      <button className="delete-btn" onClick={() => handleDelete(todo)}>
        <IoTrashBinOutline />
      </button>
    </li>
  );
};

export default TodoItem;
