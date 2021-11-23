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
    const moment = now.split(':');
    const minutes = parseInt(moment[1], 10);
    const seconds = moment[2].split(' ')[0];
    if (minutes % 5 === 0 && seconds === '00') {
      refreshWeatherData();
    }
  }, [now]);

  return (
    <Title>{now}</Title>
  );
};

export default Time;
