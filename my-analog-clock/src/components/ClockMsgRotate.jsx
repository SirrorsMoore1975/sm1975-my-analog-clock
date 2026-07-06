import React, { useState, useEffect } from "react";

const ClockMsgRotate = ({ className, message }) => {
  const [msg, setMsg] = useState("");

  return (
    <>
      {message.map((char, index, fulllist) => {
        return <span>{char}</span>;
      })}
    </>
  );
};
