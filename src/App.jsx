import React from "react";
import Count from "./component/Count";
import Person from "./component/Person";
import Husband from "./component/Husband";

const App = () => {
  return (
    <div>
      <Count />
      <Husband />
    </div>
  );
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [countState, setCountState] = useState(0);
//   let countNormal = 0;

//   const onClickState = () => {
//     setCountState(100000);
//   };

//   const onClickNormal = () => {
//     countNormal = 100000;
//   };

//   console.log("re-render");
//   return (
//     <div>
//       <h1>countState : {countState}</h1>
//       <h1>countNormal : {countNormal}</h1>
//       <button onClick={onClickState}>onClickState!</button>
//       <button onClick={onClickNormal}>onClickNormal!</button>
//     </div>
//   );
// };

// export default App;
