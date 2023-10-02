import React, { createContext, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
//crud

export const TododContext = createContext(null);

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  console.log(todos);
  return (
    <TododContext.Provider
      value={{
        todos,
        handleAddTodo,
      }}
    >
      <div className="container">
        <h1>TODOLIST</h1>
        <Form />
        <Todo />
      </div>
    </TododContext.Provider>
  );
};

export default App;
