import { useEffect, useState, useRef } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";

const debug = false;

const ClockHand = ({
  className,
  handsDegree,
  handWidth = 100,
  handHeight = 18,
  color,
  zIndex = 0,
  borderTop = "1px solid #000",
}) => {
  const [offset, setOffset] = useState({ x: null, y: null });
  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();
  const clockHandRef = useRef(null);
  useEffect(() => {
    if (clockHandRef.current) {
      const margin = 20;
      const rect = clockHandRef.current.getBoundingClientRect();
      const maxX = width - rect.width - margin;
      const maxY = height - rect.height - margin;
      const minX = margin;
      const minY = margin;

      setOffset({
        x: Math.min(Math.max(x, minX), maxX),
        y: Math.min(Math.max(y, minY), maxY),
      });
    }
  }, [x, y, width, height]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          pointEvent: "none",
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transformOrigin: "center center",
          width: `200px`,
          height: `200px`,
          zIndex: 9999,
        }}
      >
        <div className={`clockHand ${className}`} ref={clockHandRef}>
          <span>
            {debug ? (
              `handsObject:${handsDegree} left:${x} top:${y}`
            ) : (
              <span
                style={{
                  position: "absolute",
                  transformOrigin: `left`,
                  left: "50%",
                  bottom: "50%",
                  justifyContent: `center`,
                  alignItems: `center`,
                  backgroundColor: `${color}`,
                  borderRadius: "4px",
                  borderTop: `${borderTop}`,
                  transform: `rotate(${handsDegree - 90}deg)`,
                  width: `${handWidth}px`,
                  height: `${handHeight}px`,
                  userSelect: "none",
                }}
              ></span>
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default ClockHand;
