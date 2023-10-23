import React, { createContext, useState } from "react";
import "./App.css";

import { Button, Input } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import MyInput from "./components/MyInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useBoolean from "./hooks/useBoolean";

const delayTime = (ts = 1000) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, ts);
  });

const loginSchema = yup.object().shape({
  username: yup.string().min(2, "Maxium is 2").required("User is required"),
  password: yup.string().min(2, "Maxium is 2").required("Password is required"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")

    .required("Confirm Password is required"),
  email: yup
    .string()
    .email("This is invalid email")
    .required("Email is required"),
});

const App = () => {
  const {
    value: isLoading,
    onSetTrue: startLoading,
    onSetFalse: endLoading,
  } = useBoolean();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      confirm: "",
    },
    onSubmit: async (values) => {
      startLoading();
      await delayTime(3000);
      console.log(values);
      toast.success("Register successfully!");
      endLoading();
    },
    validationSchema: loginSchema,
  });

  return (
    <div className="form">
      <h1>REGISTER</h1>
      <MyInput
        placeholder={"Email"}
        id={"email"}
        name={"email"}
        formik={formik}
      />
      <MyInput
        placeholder={"Username"}
        id={"username"}
        name={"username"}
        formik={formik}
      />
      <MyInput
        placeholder={"Password"}
        id={"password"}
        name={"password"}
        formik={formik}
      />
      <MyInput
        placeholder={"Confirm password"}
        id={"confirm"}
        name={"confirm"}
        formik={formik}
      />
      <Button
        type="primary"
        onClick={formik.handleSubmit}
        style={{
          marginTop: "10px",
        }}
        size="large"
        loading={isLoading}
      >
        Login
      </Button>
      <ToastContainer />
    </div>
  );
};

export default App;
