import { useState, useEffect, useRef } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";
import useCurrentTime from "../utilities/CurrentTime.js";
import ClockFace from "./ClockFace.jsx";
import ClockHand from "./ClockHand.jsx";

const AnalogClock = () => {
  const { x, y } = useMousePosition();
  const { wdith, height } = useWindowSize();
  const analogClockRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

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

  const hoursAngle = (hours / 60) * 360;
  const minutesAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
  const secondsAngle = ((hours % 12) / 12) * 360 + minutes * 60 * 30;
  const fullTime = `(${weeknumber}) ${weekday} ${day}${suffix} ${months} ${year} ${hh}:${mm}:${ss} ${meridiem}`;

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <ClockFace />
        <ClockHand
          className="testing_hand"
          color="#000"
          handHeight={50}
          degree={30}
          handsObject={hoursAngle}
          handWidth={50}
          pivotOffset={10}
          zIndex={1}
          x={x}
          y={y}
        />
        {fullTime}
      </div>
    </>
  );
};

export default AnalogClock;
