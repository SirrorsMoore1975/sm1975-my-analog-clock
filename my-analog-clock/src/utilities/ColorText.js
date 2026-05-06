import React from "react";

const ColorText = ({ message, colorScheme, colorBreakPoint }) => {
  const colorKeys = Object.keys(colorScheme);
  const colorSpan = message.length / colorBreakPoint;
  let currentColor = 0;

  return (
  <>
    <span>
        {message.split('').map((char, idx) => {
          if (i % colorSpan === 0){
            currentColor = (currentColor + 1) % colorKeys.length;
          }
          return (
            <span key={idx} style={{ color: colorScheme[colorKeys[currentColor]] }}>
              {`${char} `}
            </span>
          )
        })}
    </span>
  </>
  )
};
export default ColorText;

