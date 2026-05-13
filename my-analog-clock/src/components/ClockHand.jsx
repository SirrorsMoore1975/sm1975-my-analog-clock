import { useEffect, useState } from "react";

const ClockHand = (className, handsObject, degree) => {
  return (
    <>
      <div
        className={className}
        styles={{ transform: `rotateZ(${handsObject * degree}deg)` }}
      ></div>
    </>
  );
};

export default ClockHand;
