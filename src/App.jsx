import React, { useState } from "react";
import "./App.css";

import Todo from "./components/Todo";
//data types : array;

const initialVal = {
  value: "",
  error: false,
};

const App = () => {
  const [val, setVal] = useState(initialVal);

  const { value, error } = val;
  const [todos, setTodos] = useState([]);

  const onButtonClick = () => {
    if (!value) {
      setVal({ ...val, error: true });
      return;
    }

    const newTodo = {
      name: value,
      created_at: new Date().toLocaleString(),
      isCompleted: false,
      id: todos.length + 1,
    };

    //spread orepator
    setTodos([...todos, newTodo]);
    //reset input
    setVal(initialVal);
  };

  return (
    <div>
      <h1>Todolist</h1>
      <div className="input-container">
        <input
          placeholder="Enter your task"
          value={value}
          onChange={(e) => setVal({ value: e.target.value, error: false })}
        />
        <button onClick={onButtonClick}>Add</button>
      </div>
      <p className="error">{error ? "Enter your task" : ""}</p>

      <div className="todo-container">
        {todos.map((item, index) => (
          <Todo key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
