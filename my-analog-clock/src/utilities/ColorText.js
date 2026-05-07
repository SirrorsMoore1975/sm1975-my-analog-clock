import React, { useState, useEffect } from "react";
const defaultColorScheme = {
  red: "rgb(255,0,0)",
  brown: "rgb(255,255,0)",
  green: "rgb(0,255,0)",
  yellow: "rgb(0,255,255)",
  blue: "rgb(0,0,255)",
  pink: "rgb(255,0,255)",
};

const ColorText = ({ message, colorScheme = defaultColorScheme }) => {
  //const [ colors, setColors ] = useState({});
  //const [colorIdx, setColorIdx] = useState(0);
  const colorKeys = Object.keys(colorScheme);
  const colorLength = Object.entries(colorScheme).length;
  const colorValues = Object.values(colorScheme);
  const [offset, setOffset] = useState(0);
  //const colorSpan = message.length / colorBreakPoint;
  //let currentColor = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      //setColorIdx((prevIndex)=>(prevIndex + 1) % colors.length);
      setOffset((prev) => (prev + 1) % colorLength);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [colorLength]);

  return (
    <>
      <span>
        {message.split("").map((char, idx) => (
          <span
            key={idx}
            style={{
              fontSize: 24,
              color: colorValues[(offset + idx) % colorLength],
            }}
          >
            {`${char} `}
          </span>
        ))}
      </span>
    </>
  );
};
export default ColorText;
