import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoDate from "./TodoDate";
import TodoItem from "./TodoItem";
import { getLocalStorageData, setLocalStorageData } from "./TodosLocalStorage";

const Todo = () => {
  const [todos, setTodos] = useState(() => getLocalStorageData());

  // input comes form TodoForm by stateLifting
  const getInput = (input) => {
    const { id, content, checked } = input;

    // if (todos.includes(input.content)) return;
    const ifTodoContentMatched = todos.find((todo) => todo.content === content);

    if (ifTodoContentMatched) return;

    setTodos((prev) => [{ id, content, checked }, ...prev]);
  };

  // delete a todo
  const handleDelete = (currTodo) => {
    const newtodos = todos.filter((todo) => todo.id !== currTodo.id);

    setTodos(newtodos);
  };

  // clear all todos
  const handleClearAll = () => {
    setTodos([]);
  };

  // cheacked functionality
  const handleChecked = (checkedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === checkedTodo.id) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  setLocalStorageData(todos);

  return (
    <div className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <div className="form">
        <TodoForm getInput={getInput} />
      </div>

      <div className="myUnOrdList">
        <ul>
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                checked={todo.checked}
                handleDelete={handleDelete}
                handleChecked={handleChecked}
              />
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
