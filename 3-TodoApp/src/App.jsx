import { use } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {
  const [todoItems, settodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    settodoItems(newTodoItem);
  };

  const handleDeleteItem = (todoName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoName);
    settodoItems(newTodoItem);
  };

  return (
    <div className="todoContainer">
      <AppName />
      <AddTodo onNewIem={handleNewItem} />
      <hr />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </div>
  );
}

export default App;
