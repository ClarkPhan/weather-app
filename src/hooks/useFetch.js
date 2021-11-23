import { useState, useEffect } from 'react';
import { useDispatch, batch } from 'react-redux';

import { setWeatherData, setCity } from '../features/weather/weatherSlice';
import { setIsLoading, setError, setInitialLoad } from '../features/sys/sysSlice';

const useFetch = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState(null);

  const fetchWeatherData = (city) => {
    const query = `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
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
          dispatch(setCity(city));
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

  const fetchLocationWeatherData = (location) => {
    const query = `${process.env.REACT_APP_API_URL}/weather?lat=${location?.lat}&lon=${location?.long}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
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
          dispatch(setCity(res.name));
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
    fetchLocationWeatherData,
  };
};

export default useFetch;
