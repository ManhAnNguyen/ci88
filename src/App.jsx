import React, { useState } from "react";
import A from "./components/A";
import B from "./components/B";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <A count={count} setCount={setCount} />
      <B count={count} />
    </div>
  );
};

export default App;
//lifting state up

// import React, { useState } from "react";
// import "./App.css";
// import Input from "./components/Input";
// import Button from "./components/Button";

// const initialValue = {
//   username: "",
//   password: "",
//   confirm: "",
//   co3Bich: false,
// };

// const App = () => {
//   const [infoUser, setInfoUser] = useState(initialValue);

//   //handle input
//   const onHandleChange = (key, event) => {
//     const value = event.target.value;

//     setInfoUser({ ...infoUser, [key]: value });
//   };

//   //detructring object
//   const { username, password, confirm, co3Bich } = infoUser;

//   //reset input
//   function onReset() {
//     setInfoUser(initialValue);
//   }

//   //handle register
//   const onClick = () => {
//     if (!username || !password || !confirm) {
//       alert("username,password,confirm password are required");
//       return;
//     }
//     if (password !== confirm) {
//       alert("check password");
//       return;
//     }

//     alert("success");

//     console.log(infoUser);
//     onReset();
//   };

//   return (
//     <div className="container">
//       <Input
//         label="Username"
//         value={username}
//         onChange={(e) => onHandleChange("username", e)}
//       />
//       <Input
//         label="Password"
//         value={password}
//         onChange={(e) => onHandleChange("password", e)}
//         type="password"
//       />
//       <Input
//         label="Confirm password"
//         value={confirm}
//         onChange={(e) => onHandleChange("confirm", e)}
//         type="password"
//       />
//       <div className="bich">
//         <span>có 3 bích</span>
//         <input
//           type="checkbox"
//           checked={co3Bich}
//           onChange={() => setInfoUser({ ...infoUser, co3Bich: !co3Bich })}
//         />
//       </div>
//       <Button text={"Register"} backgroundColor="green" onClick={onClick} />{" "}
//       <Button text={"Reset"} backgroundColor="red" onClick={onReset} />
//     </div>
//   );
// };

// export default App;
// //value
// //onChange
