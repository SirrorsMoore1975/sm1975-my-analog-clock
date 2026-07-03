import React from "react";

const clockLetters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ClockFace = () => {
  return (
    <>
      {clockLetters.map((char, index) => {
        const angle = 30 * char;
        return (
          <div
            className="clock_numbers"
            key={index}
            style={{
              position: "absolute",
              pointerEvents: "none",
              left: "50%",
              top: "50%",
              transform: `rotate(${angle}deg) translate(0px,-80px) rotate(-${angle}deg)`,
              fontSize: 24,
              fontWeight: "bold",
              color: "#000",
              userSelect: "none",
              textAlign: "center",
              width: "20px",
              marginLeft: "-10px",
              marginTop: "-10px",
            }}
          >
            {`${char}`}
          </div>
        );
      })}
    </>
  );
};

export default ClockFace;
