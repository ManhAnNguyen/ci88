import { Button, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import useCount from "../hooks/useCount";
import useBoolean from "../hooks/useBoolean";
import useInput from "../hooks/useInput";
import useHover from "../hooks/useHover";

const Home = () => {
  const { value, onSetFalse, onSetTrue } = useBoolean();

  return (
    <div>
      <h1>List students</h1>
      <ul>
        <li>A</li>
        <li>B</li>
      </ul>
      <Modal open={value} onCancel={onSetFalse}>
        <>
          <Input placeholder="Enter name" />
          <Button onClick={onSetFalse} danger>
            Close
          </Button>
        </>
      </Modal>
      <Button onClick={onSetTrue}>Open modal</Button>
    </div>
  );
};

export default Home;

//use input
//use boolean
//use localStorage
