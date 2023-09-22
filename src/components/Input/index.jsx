import React, { useState } from "react";
import "./styles.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";

const Input = ({ label, onChange, value, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const typeInput =
    type === "password" ? (showPassword ? "text" : "password") : type;
  return (
    <div className="input-container">
      <span className="label">{label}</span>
      <input type={typeInput} value={value} onChange={(e) => onChange(e)} />
      <span
        className="eye-icon"
        style={{
          display: type === "password" ? "block" : "none",
        }}
        onClick={() => setShowPassword(!showPassword)}
      >
        <AiFillEyeInvisible
          size={15}
          color="violet"
          className={`${showPassword ? "show" : "hidden"}`}
        />
        <BsEyeFill
          size={15}
          color="violet"
          className={`${!showPassword ? "show" : "hidden"}`}
        />
      </span>
    </div>
  );
};

export default Input;

//type === 'password'
