import React from "react";
import "./styles.css";
import { Input } from "antd";

const MyInput = ({ placeholder, id, name, formik }) => {
  const isError = !!formik.errors[name];
  return (
    <div className="input-wrapper">
      <Input
        placeholder={placeholder}
        id={id}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        status={isError && "error"}
        size="large"
      />
      {isError && (
        <p
          style={{
            color: "red",
          }}
        >
          {formik.errors[name]}
        </p>
      )}
    </div>
  );
};

export default MyInput;
