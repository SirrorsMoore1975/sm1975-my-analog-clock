import { useEffect, useState } from "react";

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const suffix = (target) => {
    if (target === 1 || target === 21 || target === 31) {
      return "st";
    } else if (target === 2 || target === 22) {
      return "nd";
    } else if (target === 3 || target === 23) {
      return "rd";
    } else {
      return "th";
    }
  };

  const twoDigits = (target) => {
    if (target < 10) {
      return `0${target}`;
    } else {
      return `${target}`;
    }
  };

  const weekNumber = (date) => {
    /* Check how to create week number */
    /* Credit: geeksforgeeks.org/javascript/calculate-current-week-number-in-javascript/ */

    const currentDate = date instanceof Object ? date : new Date();
    const janFirst = new Date(currentDate.getFullYear(), 0, 1);
    const daysToNextMonday =
      janFirst.getDay() === 1 ? 0 : (7 - janFirst.getDay()) % 7;
    const nextMonday = new Date(
      currentDate.getFullYear(),
      0,
      janFirst.getDate() + daysToNextMonday,
    );

    return currentDate < nextMonday
      ? 52
      : currentDate > nextMonday
        ? Math.ceil((currentDate - nextMonday) / (24 * 3600 * 1000) / 7)
        : 1;
  };

  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const WeekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return {
    hh: twoDigits(currentTime.getHours()),
    mm: twoDigits(currentTime.getMinutes()),
    ss: twoDigits(currentTime.getSeconds()),
    hours: currentTime.getHours(),
    minutes: currentTime.getMinutes(),
    seconds: currentTime.getSeconds(),
    suffix: `${suffix(currentTime.getDate())}`,
    months: Months[currentTime.getMonths()],
    weekday: WeekDay[currentTime.getDay()],
    year: currentTime.getFullYear(),
    day: currentTime.getDate(),
    weeknumber: weekNumber(currentTime),
  };
}; // CurrentTime

export default useCurrentTime;
