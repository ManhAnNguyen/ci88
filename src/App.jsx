import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

//crud

export const TododContext = createContext(null);

const App = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    toast.success("add to do success");
  };

  const handleDelete = (id) => {
    const newTodo = todos.filter((_todo) => _todo.id !== id);
    setTodos(newTodo);
    toast.error("delete!!");
  };

  const handleCheck = (id) => {
    const newTodo = todos.map((_todo) =>
      _todo.id === id ? { ..._todo, isCompleted: !_todo.isCompleted } : _todo
    );

    setTodos(newTodo);
    toast.success("checked!!");
  };

  const handleEdit = (id) => {
    const value = prompt("new value");
    if (!value) return toast.warn("must be has value");

    const newTodo = todos.map((_todo) =>
      _todo.id === id ? { ..._todo, name: value } : _todo
    );
    setTodos(newTodo);
    toast.success("update!!");
  };

  const handleRemoveChecked = () => {
    const newTodo = todos.map((_todo) => ({ ..._todo, isCompleted: false }));
    setTodos(newTodo);
    toast.success("ok!!");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TododContext.Provider
      value={{
        todos,
        handleAddTodo,
        handleDelete,
        handleCheck,
        handleEdit,
        handleRemoveChecked,
      }}
    >
      <div className="container">
        <h1>TODOLIST</h1>
        <Form />
        <Todo />
      </div>
      <ToastContainer />
    </TododContext.Provider>
  );
};

export default App;
