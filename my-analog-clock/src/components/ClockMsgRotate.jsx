import React, { useState, useEffect } from "react";

const ClockMsgRotate = ({ className, message }) => {
  const [msg, setMsg] = useState("");

  return (
    <>
      {message.split("").map((char, index, fulllist) => {
        
        const len = fulllist ? fulllist.length : 1;
       const deg = (360 / len) * index;  
        return <span
          className={className}
          key={index}
          style={{
            position:"absolute",
            transform: `rotate(${deg}deg) translate(0px, -100px)`,
            left:"50%",
            top:"50%",
            fontSize:16,
            fontweight:"bold",
            color:"#000033",
            textAlign:"center",
            width:"20px",
            marginLeft:"-10px",
            marginTop:"-10px",
            userSelect:"none",
          }}
        >{` ${char}`}</span>;
      })}
    </>
  );
};

export default ClockMsgRotate;
