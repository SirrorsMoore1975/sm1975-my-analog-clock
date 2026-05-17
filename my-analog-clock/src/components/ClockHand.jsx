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
  return (
    <>
      <div
        className={className}
        styles={{
          transform: `translateX(-50%) rotate(${handsObject * degree}deg)`,
          backgroundColor: `${color}`,
          width: `${handWidth}px`,
          height: `${handHeight}px`,
          position: "absolute",
          left: "50%",
          bottom: `calc(50%, - ${pivotOffset}px)`,
          transformOrigin: `bottom center`,
          borderRadius: "4px solid #CCC",
        }}
      >
        {debug ? `handsObject:${handsObject} degree:${degree}` : ""}
      </div>
    </>
  );
};

export default ClockHand;
