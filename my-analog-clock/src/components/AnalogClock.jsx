import React from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";
import useCurrentTime from "../utilities/CurrentTime.js";
import ClockFace from "./ClockFace.jsx";
import ClockHand from "./ClockHand.jsx";

const AnalogClock = () => {
  const { x, y } = useMousePosition();
  const { wdith, height } = useWindowSize();

  const {
    hh,
    mm,
    ss,
    hours,
    minutes,
    seconds,
    suffix,
    months,
    weekday,
    year,
    day,
    weeknumber,
    meridiem,
  } = useCurrentTime();

  const secondAngle = (seconds / 60) * 360;
  const minutesAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourAngle = ((hours % 12) / 12) * 360 + minutes * 60 * 30;
  const fullTime = `(${weeknumber}) ${weekday} ${day}${suffix} ${months} ${year} ${hh}:${mm}:${ss} ${meridiem}`;

  return (
    <>
      <div>
        <ClockFace />
        <ClockHand
          className="testing_hand"
          color="#000"
          handHeight={18}
          handsDegree={secondAngle}
          handWidth={150}
          zIndex={9997}
        />
        {fullTime}
      </div>
    </>
  );
};

export default AnalogClock;
