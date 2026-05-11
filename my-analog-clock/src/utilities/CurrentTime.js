import { useEffect, useState } from "react";

const CurrentTime = () => {
  const getCurrentTime = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const weekday = time.getDay();
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    return { time, hours, minutes, seconds, weekday, day, month, year };
  }; // getCurrentTime
  const [currentTime, setCurrentTime] = useState({});
  useEffect(() => {
    const suffix = () => {
      if (
        getCurrentTime().day === 1 ||
        getCurrentTime().day === 21 ||
        getCurrentTime().day === 31
      )
        return "st";
      else if (getCurrentTime().day === 2 || getCurrentTime().day === 22)
        return "nd";
      else if (getCurrentTime().day === 3 || getCurrentTime().day === 23)
        return "rd";
      else return "th";
    };
    setCurrentTime(() => {
      return {
        time: getCurrentTime().time,
        hh:
          getCurrentTime().hours < 10
            ? `0${getCurrentTime().hours}`
            : `${getCurrentTime().hours}`,
      };
    });
  }, []);
}; // CurrentTime

export default CurrentTime;
