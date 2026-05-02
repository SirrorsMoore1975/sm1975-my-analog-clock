import React, {useState} from 'react';
import useMousePosition from "./utilities/MousePosition.js";
import useWindowSize from "./utilities/WindowSize.js";

/* For Debugging Purposes */

const HelloWorld = () => {
  const [helloworld, sethelloworld] = useState("");
  // const [pos, setPos]=useState({x:null.y:null});
  const {x, y} = useMousePosition();
  const {width, height} = useWindowSize(); 
  
  return (
    <>
    <div className="hello_world_style" 
      style={{
          position:"absolute",
          top: {x}px,
          left: {y}px,
          transform:translate(-50%,-50%),
          z-index: 10
        }}
      >"Hello, World!"</div> 
    </>
  );
};

