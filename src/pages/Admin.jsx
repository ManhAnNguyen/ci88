import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const user = {
  role: "admin",
};
const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role === "user") {
      navigate("/");
    }
  }, []);
  return <div>Admin</div>;
};

export default Admin;
