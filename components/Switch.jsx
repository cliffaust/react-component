import React, { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function Switch({
  slideColorClass = "bg-purple-200",
  roundedColorClass = "bg-purple-500",
}) {
  const [state, setState] = useState({
    switchButton: false,
  });
  const variants = {
    hide: {
      x: 0,
    },
    show: {
      x: 25,
    },
  };
  return (
    <motion.div
      onClick={() => setState({ ...state, switchButton: !state.switchButton })}
      className={
        "w-16 h-9 bg-gray-200 rounded-3xl flex items-center px-1 cursor-pointer transition-colors duration-300 ease-in-out " +
        (state.switchButton ? slideColorClass : "")
      }
    >
      <motion.div
        variants={variants}
        animate={state.switchButton ? "show" : "hide"}
        className={"w-8 h-8 rounded-full " + roundedColorClass}
      ></motion.div>
    </motion.div>
  );
}

Switch.propTypes = {
  slideColorClass: PropTypes.string,
  roundedColorClass: PropTypes.string,
};

export default Switch;
