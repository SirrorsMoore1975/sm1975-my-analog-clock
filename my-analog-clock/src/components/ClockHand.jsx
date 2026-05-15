import { useEffect, useState } from "react";

const ClockHand = ({
  className,
  handsObject,
  width,
  height,
  degree,
  color,
  pivotOffset = 0,
}) => {
  return (
    <>
      <div
        className={className}
        styles={{
          transform: `rotateZ(${handsObject * degree}deg)`,
          backgroundColor: `${color}`,
          width: `${width}`,
          height: `${height}`,
          position: "absolute",
          left: "50%",
          bottom: `calc(50%, - ${pivotOffset}px)`,
          transformOrigin: `bottom center`,
          borderRadius: "4px",
        }}
      ></div>
    </>
  );
};

export default ClockHand;
