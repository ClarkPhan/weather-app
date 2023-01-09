import React, { useEffect, useState } from 'react';
import date from 'date-and-time';

import Title from './styled';
import useRefresh from '../../../hooks/useRefresh';

// precompile and reuse pattern for performance
const pattern = date.compile('h:mm:ss A');

const Time = () => {
  const [time, setDate] = useState(date.format(new Date(), pattern));
  const { refreshWeatherData } = useRefresh();
  const refreshClock = () => setDate(date.format(new Date(), pattern));

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => clearInterval(timerId);
  });

  useEffect(() => {
    const moment = time.split(':');
    const minutes = parseInt(moment[1], 10);
    const seconds = moment[2].split(' ')[0];
    if (minutes % 5 === 0 && seconds === '00') {
      refreshWeatherData();
    }
  }, [time]);

  return (
    <Title>{time}</Title>
  );
};

export default Time;
