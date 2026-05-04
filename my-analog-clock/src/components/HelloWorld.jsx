import React, { useState, useEffect } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";

/* For Debugging Purposes */

const HelloWorld = () => {
  const [helloworld, sethelloworld] = useState("");
  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();
  const [offset, setOffset] = useState({_x:10, _y:20 });

  useEffect(()=>{
    setOffset(()=>{
      
    })
  },[width, height])

  return (
    <>
      <div
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          top: 0,
          left: 0,
          /*width:`${width}vw`, 
        height:`${height}vh`*/
        }}
      >
        <div
          className="hello_world_style"
          style={{
            position: "absolute",
            /* top: `${x}px`, 
          left:`${y}px`, */
            transform: `translate(${x}px,${y}px)`,
            /*zIndex:'10', */
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          Hello, World!
          <span>
            Mouse at ({x}, {y})
          </span>
          <span>
            Screen Size: ({width}, {height})
          </span>
        </div>
      </div>
    </>
  );
};
export default HelloWorld;
