import { Button } from "antd";
import React, { useContext } from "react";
import { TododContext } from "../../App";

const RemoveAll = () => {
  const { handleRemoveChecked } = useContext(TododContext);
  return (
    <Button
      type="primary"
      style={{
        background: "#5ba3c9",
      }}
      onClick={handleRemoveChecked}
    >
      Remove checked
    </Button>
  );
};

export default RemoveAll;
