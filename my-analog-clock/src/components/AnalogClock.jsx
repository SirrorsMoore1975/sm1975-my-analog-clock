import React from "react";
import useCurrentTime from "../utilities/CurrentTime.js";
import ClockFace from "./ClockFace.jsx";
import ClockHand from "./ClockHand.jsx";

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

  const secondAngle = (seconds / 60) * 360;
  const minutesAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourAngle = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;
  const fullTime = `(${weeknumber}) ${weekday} ${day}${suffix} ${months} ${year} ${hh}:${mm}:${ss} ${meridiem}`;

  return (
    <>
      <div>
        <ClockFace />
        <ClockHand
          className="secondsHand"
          color="#e83151"
          handHeight={1}
          handsDegree={secondAngle}
          handWidth={90}
          zIndex={9997}
          borderTop="2px solid #E83151"
        />
        <ClockHand
          className="minutesHand"
          color="#cccccc"
          handHeight={1}
          handsDegree={minutesAngle}
          handWidth={75}
          zIndex={9996}
          borderTop="4px solid #CCC"
        />
        <ClockHand
          className="hoursHand"
          color="#cccccc"
          handHeight={1}
          handsDegree={hourAngle}
          handWidth={65}
          zIndex={9995}
          borderTop="8px solid #CCC"
        />
        {fullTime}
      </div>
    </>
  );
};

export default AnalogClock;
