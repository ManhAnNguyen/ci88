import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { TbTrashXFilled } from "react-icons/tb";
const Todo = ({ item, index }) => {
  const { id, name, isCompleted, created_at } = item;
  return (
    <div className="todo-item" key={id}>
      <p>#{index + 1}.</p>
      <p className="name">{name}</p>
      <p className={`status ${isCompleted ? "done" : "not_completed"}`}>
        {isCompleted ? "Done" : "Not completed"}
      </p>
      <p className="created_at">{created_at}</p>
      <div className="actions">
        <span className="edit">
          <BiEditAlt size={20} color="blue" />
        </span>
        <span className="delete">
          <TbTrashXFilled size={20} color="red" />
        </span>
      </div>
    </div>
  );
};

export default Todo;
