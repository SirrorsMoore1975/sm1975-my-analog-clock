import { useEffect, useState } from "react";

const ClockHand = (className, handsObject, width, height, degree, color) => {
  return (
    <>
      <div
        className={className}
        styles={{
          transform: `rotateZ(${handsObject * degree}deg)`,
          color: `${color}`,
          width: `${width}`,
          height: `${height}`,
        }}
      ></div>
    </>
  );
};

export default ClockHand;
