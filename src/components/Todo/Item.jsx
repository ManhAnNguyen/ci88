import { Checkbox, Typography } from "antd";
import React, { useContext } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { TododContext } from "../../App";

const Item = ({ item, index }) => {
  const { name, id, isCompleted } = item;
  const { handleDelete, handleCheck, handleEdit } = useContext(TododContext);

  return (
    <div className="item">
      <div className="item-left">
        <Checkbox checked={isCompleted} onClick={() => handleCheck(id)} />
        <Typography
          style={{
            textDecoration: isCompleted ? "line-through" : "",
          }}
        >
          {name}
        </Typography>
      </div>
      <div className="item-right">
        <MdModeEditOutline
          color="#cce5f0"
          size={20}
          className="item-icon"
          onClick={() => handleEdit(id)}
        />
        <IoMdTrash
          color="#cce5f0"
          size={20}
          className="item-icon"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};

export default Item;
