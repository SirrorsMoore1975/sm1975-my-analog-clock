import React, {useState, useEffect} from 'react';

function MarqueeText({message="",speed=1000}){
  const [msg, setMsg] = useState(message);
  useEffect(()=>{
    const shiftLastToStart = (s) => {
      if (!s) return s;
    return s.slice(-1) + s.slice(0, -1);
    }
    const intervalId = setInterval(()=>{
      setMsg((prevText) => shiftLastToStart(prevText))
    }, speed);
    return () => clearInterval(intervalId)
  },[speed]);
  retrun msg;
}

export default return MarqueeText;
