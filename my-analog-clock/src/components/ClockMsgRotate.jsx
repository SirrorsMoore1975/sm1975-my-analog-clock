import React, { useState, useEffect } from "react";

const ClockMsgRotate = ({ className, message }) => {
  const [msg, setMsg] = useState("");

  return (
    <>
      {message.split("").map((char, index, fulllist) => {
        const len = fulllist.length;
        return <span>{` ${char} `}</span>;
      })}
    </>
  );
};

export default ClockMsgRotate;
