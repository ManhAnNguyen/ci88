import React from "react";

const B = ({ count }) => {
  return (
    <div>
      B<button onClick={() => alert(count)}>SHOW ALERT</button>
    </div>
  );
};

export default B;
