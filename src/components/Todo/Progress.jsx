import React from "react";

const Progress = () => {
  return (
    <div className="progress">
      <span className="layer-progress"></span>
      <div className="progress-content">
        <p className="text">
          <span className="bold">1</span> of
          <span className="bold">2</span> tasks done
        </p>
      </div>
    </div>
  );
};

export default Progress;
