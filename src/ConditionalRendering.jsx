import React, { useState } from "react";
import ComponentA from "./components/A";
import ComponentB from "./components/B";

const ConditionalRendering = () => {
  const [switched, setSwitched] = useState(false);

  const onClickButton = () => {
    setSwitched(!switched);
  };

  //   const renderComponent = () => {
  //     if (switched) {
  //       return <ComponentB />;
  //     } else {
  //       return <ComponentA />;
  //     }
  //   };
  return (
    <div>
      {/* <div
        style={{
          display: !switched ? "block" : "none",
        }}
      >
        {" "}
        <ComponentA />
      </div>
      <div
        style={{
          display: switched ? "block" : "none",
        }}
      >
        {" "}
        <ComponentB />
      </div> */}
      {/* {switched ? <ComponentB /> : <ComponentA />} */}
      {/* {renderComponent()} */}
      {/* {(() => {
        if (switched) {
          return <ComponentB />;
        } else {
          return <ComponentA />;
        }
      })()} */}

      {/* {switched ? <ComponentA /> : null } */}
      {switched && <ComponentA />}

      <button onClick={onClickButton}>Switch</button>
    </div>
  );
};

export default ConditionalRendering;

//ban đầu : A hiện; B ẩn
// ấn switch thì ngc lại
//toán tử ba ngôi : ? :
//if else
//&&

//ex2 : switched  bằng true hiẹn A, thế thôi
