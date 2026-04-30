import React, { useState, useEffect } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";

const MessageLayer = () => {
  const [message, setMessage] = useState("Hello, World!");

  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();

  return <></>;
};

export default MessageLayer;
