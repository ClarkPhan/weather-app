import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Title from './styled';

import { tick } from '../../../features/sys/sysSlice';
import useRefresh from '../../../hooks/useRefresh';

const Time = () => {
  const dispatch = useDispatch();
  const { refreshWeatherData } = useRefresh();
  const now = useSelector((state) => state.sys.now);
  const refreshClock = () => dispatch(tick());

  useEffect(() => {
    setInterval(refreshClock, 1000);
  });

  useEffect(() => {
    const topOfTheHour = now.split(':');
    if (topOfTheHour[1] === '00' && topOfTheHour[2] === '00') {
      refreshWeatherData();
    }
  }, [now]);

  return (
    <Title>{now}</Title>
  );
};

export default Time;
