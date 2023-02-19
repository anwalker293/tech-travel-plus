import React, { useState, useEffect } from "react";
import "./preloader.css";
import { motion } from "framer-motion";

export default function Preloader() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 20);
    }
  }, [filled, isRunning]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <div>
        <div id="preloader">
          <div id="percent">{filled}%</div>

          <div id="bar">
            <div
              id="barconfrm"
              style={{
                width: `${filled}%`,
                transition: "width 0.2s",
              }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
