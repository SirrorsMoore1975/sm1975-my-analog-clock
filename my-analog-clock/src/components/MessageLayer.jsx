import React, { useState, useEffect } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";

const MessageLayer = () => {
  const [message, setMessage] = useState("Hello, World!");

  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();

  const messageStyle = {
    position: "abosolute",
    left: x,
    top: y,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    background: "rgba(0,0,0,0.75)",
    color: "white",
    padding: "6px 8px",
    borderRadius: 4,
    fontSize: 12,
  };
  return (
    <>
      <div style={messageStyle}>{message}</div>
    </>
  );
};

export default MessageLayer;
