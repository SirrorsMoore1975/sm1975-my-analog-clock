import React from "react";

const ClockHand = ({
  className,
  handsDegree,
  handWidth = 100,
  handHeight = 18,
  color,
  zIndex = 0,
  borderTop = "1px solid #000",
}) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "50%",
          transform: `translateX(-50%) rotate(${handsDegree}deg)`,
          transformOrigin: `50% 100%`,
          backgroundColor: color,
          borderRadius: "4px",
          borderTop: borderTop,
          width: `${handWidth}px`,
          height: `${handHeight}px`,
          userSelect: "none",
          zIndex: zIndex,
          boxSizing: "content-box",
        }}
      ></div>
    </>
  );
};

export default ClockHand;
