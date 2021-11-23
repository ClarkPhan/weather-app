import React from 'react';
import { useSelector } from 'react-redux';
import { RefreshElement, RefreshButton, RefreshIcon } from './styled';
import useRefresh from '../../../hooks/useRefresh';

const Refresh = () => {
  const isLoading = useSelector((state) => state.sys.isLoading);
  const { refreshWeatherData } = useRefresh();
  return (
    <RefreshElement>
      <RefreshButton
        onClick={() => refreshWeatherData()}
      >
        <RefreshIcon isLoading={isLoading} />
      </RefreshButton>
    </RefreshElement>
  );
};

export default Refresh;
