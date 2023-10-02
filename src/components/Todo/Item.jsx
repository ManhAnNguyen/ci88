import { Checkbox, Typography } from "antd";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

const Item = ({ item }) => {
  const { name, id, isCompleted } = item;
  return (
    <div className="item">
      <div className="item-left">
        <Checkbox checked={isCompleted} />
        <Typography>{name}</Typography>
      </div>
      <div className="item-right">
        <MdModeEditOutline color="#cce5f0" size={20} className="item-icon" />
        <IoMdTrash color="#cce5f0" size={20} className="item-icon" />
      </div>
    </div>
  );
};

export default Item;
