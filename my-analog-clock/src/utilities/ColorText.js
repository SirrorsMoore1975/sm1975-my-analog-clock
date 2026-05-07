import React, { useState, useEffect } from "react";

const ColorText = ({ message, colorScheme }) => {
  const [ colors, setColors ] = useState({});
  //const [colorIdx, setColorIdx] = useState(0);
  const colorKeys = Object.keys(colors);
  //const colorSpan = message.length / colorBreakPoint;
  //let currentColor = 0;

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setColors(()=>{
        if (colorScheme && !Array.isArray(colorScheme) && typeof colorScheme === 'object'){
          return colorScheme;
        } else {
          return { 'red':'rgb(255,0,0)', 'brown':'rgb(255,255,0)', 'green':'rgb(0,255,0)', 'yellow':'rgb(0,255,255)', 'blue':'rgb(0,0,255)', 'pink':'rgb(255,0,255)'};
        }

      });
      //setColorIdx((prevIndex)=>(prevIndex + 1) % colors.length);
    }, 250);
    return () => { clearInterval(intervalId); }
  },[colors, colorScheme])
  
  return (
  <>
    <span style={{ fontSize: 24, color: colors[colorKeys] }}>
      {`${message}`}
    </span>
  
  </>
  )
};
export default ColorText;

