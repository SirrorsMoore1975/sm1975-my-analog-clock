import React, { useEffect, useState, useRef } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindowSize.js";

import useCurrentTime from "../utilities/CurrentTime.js";
import ClockFace from "./ClockFace.jsx";
import ClockHand from "./ClockHand.jsx";
import ClockMsgRotate from "./ClockMsgRotate.jsx";

const AnalogClock = () => {
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

  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();
  const clockFaceRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const secondAngle = (seconds / 60) * 360;
  const minutesAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourAngle = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;
  const fullTime = `(${weeknumber}) ${weekday} ${day}${suffix} ${months} ${year} ${hh}:${mm}:${ss} ${meridiem}`;

  useEffect(() => {
    const margin = 20;
    const rect = clockFaceRef.current.getBoundingClientRect();
    const maxX = width - rect.width - margin;
    const maxY = height - rect.height - margin;
    const minX = margin;
    const minY = margin;
    setOffset({
      x: Math.min(Math.max(x, minX), maxX),
      y: Math.min(Math.max(y, minY), maxY),
    });
  }, [x, y, width, height]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          pointEvents: "none",
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      >
        <div
          ref={clockFaceRef}
          style={{
            transform: `translate(${offset.x}px,${offset.y}px)`,
            width: "200px",
            height: "200px",
            position: "relative",
          }}
        >
          <ClockFace />
          <ClockHand
            className="secondsHand"
            color="#e83151"
            handHeight={78}
            handsDegree={secondAngle}
            handWidth={3}
            zIndex={9997}
            borderTop="2px solid #E83151"
          />
          <ClockHand
            className="minutesHand"
            color="#cccccc"
            handHeight={75}
            handsDegree={minutesAngle}
            handWidth={5}
            zIndex={9996}
            borderTop="4px solid #CCC"
          />
          <ClockHand
            className="hoursHand"
            color="#cccccc"
            handHeight={50}
            handsDegree={hourAngle}
            handWidth={8}
            zIndex={9995}
            borderTop="8px solid #CCC"
          />
          <ClockMsgRotate 
            className="clockMsg"
            message={fullTime}
          />
        </div>
      </div>
    </>
  );
};

export default AnalogClock;
