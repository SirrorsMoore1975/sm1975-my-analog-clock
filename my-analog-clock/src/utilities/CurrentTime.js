import { useEffect, useState } from "react";

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const suffix = () => {
    if (
      currentTime.day === 1 ||
      currentTime.day === 21 ||
      currentTime.day === 31
    ) {
      return "st";
    } else if (currentTime().day === 2 || currentTime().day === 22) {
      return "nd";
    } else if (currentTime().day === 3 || currentTime.day === 23) {
      return "rd";
    } else {
      return "th";
    }
  };

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
  useEffect(() => {
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

export default useCurrentTime;
