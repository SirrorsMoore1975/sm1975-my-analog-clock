import React, { useState, useEffect, useRef } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";
import ColorText from "../utilities/ColorText.js";

/* For Debugging Purposes */

const HelloWorld = () => {
  const [helloworld] = useState("Hello, World!");
  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();
  const helloworldRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const colorScheme = {
    'red': 'rgb(255,0,0)',
    'pink': 'rgb(255,180,172)',
    'green': 'rgb(102,145,134)',
    'blue': 'rgb(38,78,112)'
  }

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
            pointerEvents: "none",
          }}
        >
          <ColorText message={`${helloworld}`} colorScheme={colorScheme} colorBreakPoint={9} />
          
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
