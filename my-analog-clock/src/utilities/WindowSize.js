import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [ windowSize, setWindowSize ] = useState(()=>{
    if (typeof window !== 'undefined'){
      return {width: window.innerWidth, height: window.innerHeight}
    }
    return {width: 0, height:0}
  });
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
