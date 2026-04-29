import {useState, useEffect} from 'react';

const useAnalogClock = () => {
  const [ message, ] = useState("Hello, World!")
  return message
};

export default useAnalogClock; 
