import { useEffect, useState, useRef } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";

const debug = true;

const ClockHand = ({
  className,
  handsObject,
  handWidth = 0,
  handHeight = 0,
  degree,
  color,
  pivotOffset = 0,
  zIndex = 0,
}) => {
  const [pagePosition, setPagePosition] = useState({ left: null, top: null });
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
  const usePagePosition = () => {
    useEffect(() => {
      const updatePagePosition = (ev) => {
        setPagePosition({ left: ev.pageX, top: ev.pageY });
      };
      window.addEventListener("mousemove", updatePagePosition);
      return () => {
        window.removeEventListener("mousemove", updatePagePosition);
      };
    }, []);
    return pagePosition;
  };

  const { left, top } = usePagePosition();

  return (
    <>
      <div
        style={{
          position: "fixed",
          pointEvent: "none",
          //top: 0,
          //buttom: 0,
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transformOrigin: "center center",
          zIndex: `9`,
        }}
      >
        <div className={className} ref={clockHandRef}>
          <span
            style={{
              position: "absolute",
              width: `${handWidth}px`,
              height: `${handHeight}px`,
              //left: `${left + x}px`,
              //top: `${top + y}px`,
              //left: `${offset.x}px`,
              //top: `${offset.y}px`,
              transform: `rotation(${handsObject * degree})deg`,
              transformOrigin: "center",
              fontSize: 18,
              borderRadius: "4px",
              backgroundColor: `${color}`,
              color: "#ccc",
            }}
          >
            {debug
              ? `handsObject:${handsObject} degree:${degree} left:${left} top:${top}`
              : "HANDS====>"}
          </span>
        </div>
      </div>
    </>
  );
};

export default ClockHand;
