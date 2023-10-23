import React, { useState } from "react";
import "./App.css";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ReactDnd = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", 1, ""],
    ["", "", ""],
  ]);
  return (
    <DndProvider backend={HTML5Backend}>
      {board.map((row, rowIdx) => {
        return (
          <div className="my-row" key={rowIdx}>
            {row.map((col, colIdx) => {
              return (
                <Square
                  key={colIdx}
                  hasKing={col === 1}
                  x={rowIdx}
                  y={colIdx}
                />
              );
            })}
          </div>
        );
      })}
    </DndProvider>
  );
};

export default ReactDnd;

const Square = (props) => {
  return <div className="my-square">{props.hasKing ? <King /> : ""}</div>;
};

const King = () => {
  const [dragState, drag] = useDrag(() => ({
    type: "KING",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  console.log(dragState);
  return (
    <span style={{ fontSize: 30, cursor: "pointer" }} ref={drag}>
      ♚
    </span>
  );
};
