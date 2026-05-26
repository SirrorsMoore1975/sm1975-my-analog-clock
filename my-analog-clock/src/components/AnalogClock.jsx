import { useState, useEffect, useRef } from "react";
import useMousePosition from "../utilities/MousePosition.js";
import useWindowSize from "../utilities/WindoeSize.js";
import useCurrentTime from "../utilities/CurrentTime.js";
import ClockFace from "./ClockFace.jsx";
import ClockHand from "./ClockHand.jsx";

const AnalogClock = () => {
  const {x,y} = useMousePosition();
  const {wdith, height} = useWindowSize();
  const analogClockRef = useRef(null);
  const [ offset, setOffset ] = useState({ x:0, y:0 });
  useEffect(()=>{},[])

  return ()
}
