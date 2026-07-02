import { useState, useEffect, useRef } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";
//import useCurrentTime from "../utilities/CurrentTime.js";
//import ClockHand from "../components/ClockHand.jsx";
import "../styles/ClockFace.css";

const clockLetters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const clockAngle = 30;

const ClockFace = () => {
  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();
  const clockFaceRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (clockFaceRef.current) {
      //const { offsetWidth, offsetHeight } = clockFaceRef.current;
      //const maxX = width - offsetWidth;
      //const maxY = height - offsetHeight;
      const margin = 20;
      const rect = clockFaceRef.current.getBoundingClientRect();
      const maxX = width - rect.width - margin;
      const maxY = height - rect.height - margin;
      const minX = margin;
      const minY = margin;

      setOffset({
        x: Math.min(Math.max(x, minX), maxX),
        y: Math.min(Math.max(y, minY), maxY),
      });
    }
  }, [width, height, x, y]);
  return (
    <>
      {clockLetters.map((char, index) => {
        const angle = clockAngle * char;
        return (
          <div
            className="clock_numbers"
            key={`0${index}`}
            style={{
              position: "absolute",
              pointerEvents: "none",
              left: "50%",
              top: "50%",
              transform: `rotate(${angle}deg) translate(0px,-80px) rotate(-${angle}deg)`,
              // transition: "transform 2s easeOut",
              //transformOrigin: "center",
              //justifyContent: "center",
              //alignItems: "center",
              fontSize: 24,
              fontWight: "bold",
              color: "#000",
              userSelect: "none",
            }}
          >
            {`${char}`}
          </div>
        );
      })}
    </>
  );
};

export default ClockFace;
