import React, { useState, useEffect } from "react";
import "./preloader.css";

const Preloader = () => {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 60);
    }
  }, [filled, isRunning]);

  return (
    <div id="preloader">
      <div id="percent">{filled}%</div>

      <div id="bar">
        <div
          id="barconfrm"
          style={{
            width: `${filled}%`,
            transition: "width 0.6s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
