import React, {useState, useEffect} from 'react';

function MarqueeText(message="",speed=1000){
  const [msg, setMsg] = useState(message);

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setMsg((prevText) => prevText.slice(-1) + prevText.slice(0,-1))
    }, speed);
    return () => clearInterval(intervalId)
  },[speed]);
  return msg;
}

export default MarqueeText;
