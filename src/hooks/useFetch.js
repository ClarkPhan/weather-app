// hooks/useFetch.js
import { useState, useEffect } from 'react';
import { useDispatch, batch } from 'react-redux';

import { setWeatherData } from '../features/weather/weatherSlice';
import { setIsLoading, setError, setInitialLoad } from '../features/sys/sysSlice';

const useFetch = () => {
  const dispatch = useDispatch();
  // connect to Redux state variables
  const [url, setUrl] = useState(null);

  const fetchWeatherData = (query) => {
    if (!query) return;
    batch(() => {
      dispatch(setIsLoading(true));
      dispatch(setError(null));
    });
    fetch(query)
      .then((response) => response.json())
      .then((res) => {
        dispatch(setIsLoading(false));
        if (res.cod >= 400) {
          dispatch(setError(res.message));
          return;
        }
        console.log(res);
        batch(() => {
          dispatch(setInitialLoad(true));
          dispatch(setWeatherData(res));
        });
      })
      .catch((err) => {
        batch(() => {
          dispatch((setIsLoading(false)));
          dispatch((setError(err)));
        });
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
