// hooks/useFetch.js
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setWeatherData } from '../features/weather/weatherSlice';
import { setIsLoading, setError, setInitialLoad } from '../features/sys/sysSlice';

const useFetch = () => {
  const dispatch = useDispatch();
  // connect to Redux state variables
  const [url, setUrl] = useState(null);

  const fetchWeatherData = (query) => {
    if (!query) return;
    dispatch(setIsLoading(true));
    dispatch(setError(null));
    fetch(query)
      .then((response) => response.json())
      .then((res) => {
        dispatch(setIsLoading(false));
        if (res.cod >= 400) {
          dispatch(setError(res.message));
          return;
        }
        console.log(res);
        dispatch(setInitialLoad(true));
        dispatch(setWeatherData(res));
      })
      .catch((err) => {
        dispatch((setIsLoading(false)));
        dispatch((setError(err)));
      });
  };

  useEffect(() => {
    fetchWeatherData(url);
  }, [url]);

  return {
    setUrl,
    fetchWeatherData,
  };
};

export default useFetch;
