import { useEffect, useState } from "react";

const debug = true;

const ClockHand = ({
  className,
  handsObject,
  handWidth = 0,
  handHeight = 0,
  degree,
  color,
  pivotOffset = 0,
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
      <div
        className={className}
        styles={{
          backgroundColor: `${color}`,
          width: `${handWidth}px`,
          height: `${handHeight}px`,
          position: "absolute",
          // left: "50%",
          left: `${left}px`,
          top: `${top}px`,
          // bottom: `calc(50%, - ${pivotOffset}px)`,
          // transform: `translateX(-50%) rotateZ(${handsObject * degree}deg)`,
          // transformOrigin: `bottom center`,
          // borderRadius: "5px solid #CCC",
        }}
      >
        {debug
          ? `handsObject:${handsObject} degree:${degree} left:${left} top:${top}`
          : ""}
      </div>
    </>
  );
};

export default ClockHand;
