import React, { useState, useEffect, useRef } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";
import "../styles/ClockFace.css";

const clockLetters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//const clockSize = 50;
//const clockPivot = 100;
const clockAngle = 30;

const ClockFace = () => {
  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();
  const clockFaceRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (clockFaceRef.current) {
      const { offsetWidth, offsetHeight } = clockFaceRef.current;
      const maxX = width - offsetWidth;
      const maxY = height - offsetHeight;
      setOffset({
        x: Math.min(Math.max(x, 0), maxX),
        y: Math.min(Math.max(y, 50), maxY),
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
        <div className="clock_header">
          <span className="app_provider_header">
            Clock Provided by: @SirrorsMoore1975
          </span>
          <div className="clock_face" ref={clockFaceRef}>
            {clockLetters.map((char, index) => {
              const angle = clockAngle * char;
              return (
                <span
                  className="clock_numbers"
                  key={`0${index}`}
                  style={{
                    pointerEvents: "none",
                    transform: `translate(${offset.x}px,${offset.y}px) rotate(${angle}deg) translate(0,-100px) rotate(-${angle}deg)`,
                    transformOrigin: "center",
                    fontSize: "24px",
                    fontWight: "bold",
                  }}
                >
                  {`${char}`}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClockFace;
