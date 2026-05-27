import { useEffect, useState, useRef } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";

const debug = false;

const ClockHand = ({
  className,
  handsObject,
  x = 0,
  y = 0,
  handWidth = 0,
  handHeight = 0,
  degree,
  color,
  pivotOffset = 0,
  zIndex = 0,
}) => {
  const usePagePosition = () => {
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
      const updatePagePosition = (ev) => {
        setPagePosition({ left: ev.pageX, top: ev.pageY });
      };
      window.addEventListener("mousemove", updatePagePosition);
      return () => {
        window.removeEventListener("mousemove", updatePagePosition);
      };
    }, [x, y, width, height]);
    return pagePosition;
  };

  const { left, top } = usePagePosition();

  return (
    <>
      <div>
        <span
          className={className}
          ref={clockHandRef}
          styles={{
            position: "absolute",
            backgroundColor: `${color}`,
            width: `${handWidth}px`,
            height: `${handHeight}px`,
            // left: "50%",
            left: `${left + x}px`,
            top: `${top + y}px`,
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${handsObject * degree}deg)`,
            borderRadius: "4px",
            zIndex: `${zIndex}`,
            // bottom: `calc(50%, - ${pivotOffset}px)`,
            // transformOrigin: `bottom center`,
            // borderRadius: "5px solid #CCC",
          }}
        >
          {debug
            ? `handsObject:${handsObject} degree:${degree} left:${left} top:${top}`
            : "HANDS====>"}
        </span>
      </div>
    </>
  );
};
}
export default ClockHand;
