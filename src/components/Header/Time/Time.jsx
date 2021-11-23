import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Title from './styled';

import { tick } from '../../../features/sys/sysSlice';

const Time = () => {
  const dispatch = useDispatch();

  const now = useSelector((state) => state.sys.now);
  const refreshClock = () => dispatch(tick());

  useEffect(() => {
    setInterval(refreshClock, 1000);
  });

  return (
    <Title>{now}</Title>
  );
};

export default Time;
