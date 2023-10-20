import { Button, Input, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import useCount from "../hooks/useCount";
import useBoolean from "../hooks/useBoolean";
import useInput from "../hooks/useInput";
import useHover from "../hooks/useHover";
import useLocalStorage from "../hooks/useLocalStorage";

const Home = () => {
  const { value, onSetFalse, onSetTrue } = useBoolean();
  const { value: valueInput, onChange, onReset } = useInput();

  const [students, setStudents] = useState(
    localStorage.getItem("students")
      ? JSON.parse(localStorage.getItem("students"))
      : []
  );
  const ref = useRef();

  const handleAddStudent = () => {
    setStudents([...students, valueInput]);
    onReset();
    ref.current.focus();
  };

  useLocalStorage("students", students);

  return (
    <div>
      <h1>List students</h1>
      <ul>
        {students.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Modal open={value} onCancel={onSetFalse}>
        <>
          {valueInput}

          <Input
            placeholder="Enter name"
            onChange={onChange}
            value={valueInput}
            ref={ref}
          />
          <Button type="primary" onClick={handleAddStudent}>
            Add
          </Button>
        </>
      </Modal>
      <Button onClick={onSetTrue}>Open modal</Button>
    </div>
  );
};

export default Home;

//use input
//use boolean : show ra modal
//use localStorage
