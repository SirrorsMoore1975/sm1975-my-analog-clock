import { useEffect, useState } from "react";

const debug = true;

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
      <span
        className={className}
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
          : ""}
      </span>
    </>
  );
};

export default ClockHand;
