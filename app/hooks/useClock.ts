import { useState, useEffect } from 'react';

const useClock = (timeZone: string) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const date = new Date(time.toLocaleString('en-US', { timeZone }));
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return { hour, minute, second };
};

export default useClock;
