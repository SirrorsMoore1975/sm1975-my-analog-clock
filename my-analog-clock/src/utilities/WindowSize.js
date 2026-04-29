import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [ windowSize, setWindowSize ] = useState({ width: undefined, height: undefined });
  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize(
        {
          width: window.innerWidth,
          height: window.innerHeight
        }
      );
    };
    window.addEventListener('resize', handleWindowSize);
    return () => { 
      window.removeEventListener('resize', handleWindowSize);
    }
},[])

return windowSize;

};

export default useWindowSize;
