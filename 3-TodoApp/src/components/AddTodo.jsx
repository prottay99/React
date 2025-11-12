import styles from "./AddTodo.module.css";
import { useState, useRef } from "react";

const AddTodo = ({ onNewIem }) => {
  // const [todoName, setTodoName] = useState("");
  // const [duedate, setDuedate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handledueDateChange = (event) => {
  //   setDuedate(event.target.value);
  // };
  const handleAddButtonClicked = () => {
    // onNewIem(todoName, duedate);
    onNewIem(todoNameElement, dueDateElement);
    // setTodoName("");
    // setDuedate("");
  };

  return (
    <form className={styles.addTodoContainer} onSubmit={handleAddButtonClicked}>
      <div className={styles.addTodoInput}>
        <input type="text" placeholder="Enter a ToDo" ref={todoNameElement} />
      </div>
      <div className="addTodoDate">
        <input type="date" ref={dueDateElement} />
      </div>
      <div className="addTodoBtn">
        <button type="button">ADD</button>
      </div>
    </form>
  );
};

export default AddTodo;
