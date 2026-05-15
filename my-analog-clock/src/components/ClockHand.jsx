import { useEffect, useState } from "react";

const ClockHand = ({
  className,
  handsObject,
  width = 0,
  height = 0,
  degree,
  color,
  pivotOffset = 0,
}) => {
  return (
    <>
      <div
        className={className}
        styles={{
          transform: `translateX(-50%) rotateZ(${handsObject * degree}deg)`,
          backgroundColor: `${color}`,
          width: `${width}px`,
          height: `${height}px`,
          position: "absolute",
          left: "50%",
          bottom: `calc(50%, - ${pivotOffset}px)`,
          transformOrigin: `left bottom center`,
          borderRadius: "4px solid #CCC",
        }}
      ></div>
    </>
  );
};

export default ClockHand;
