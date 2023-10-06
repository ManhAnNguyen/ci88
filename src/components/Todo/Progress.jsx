import React, { useContext } from "react";
import { TododContext } from "../../App";

const Progress = () => {
  const { todos } = useContext(TododContext);

  const totalTodo = todos.length;
  const itemChecked = todos.filter((todo) => todo.isCompleted).length;

  if (totalTodo === 0) return <></>;

  console.log(itemChecked / totalTodo);

  return (
    <div className="progress">
      <span
        className="layer-progress"
        style={{
          width: `${(itemChecked / totalTodo) * 100}%`,
        }}
      ></span>
      <div className="progress-content">
        <p className="text">
          <span className="bold">{itemChecked}</span> of
          <span className="bold">{totalTodo}</span> tasks done
        </p>
      </div>
    </div>
  );
};

export default Progress;
