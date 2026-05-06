import React, { useState, useEffect, useRef } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";

/* For Debugging Purposes */

const HelloWorld = () => {
  const [helloworld] = useState("Hello, World!");
  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();
  const helloworldRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (helloworldRef.current) {
      const { offsetWidth, offsetHeight } = helloworldRef.current;
      const maxX = width - offsetWidth;
      const maxY = height - offsetHeight;
      setOffset({
        x: Math.min(Math.max(x, 0), maxX),
        y: Math.min(Math.max(y, 0), maxY),
      });
    }
  }, [width, height, x, y]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          top: 0,
          left: 0,
        }}
      >
        <div
          ref={helloworldRef}
          className="hello_world_style"
          style={{
            position: "absolute",
            transform: `translate(${offset.x}px,${offset.y}px)`,
            marginLeft: "20px",
            marginTop: "10px",
            pointerEvents: "none",
          }}
        >
          {helloworld}
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
