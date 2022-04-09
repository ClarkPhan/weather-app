import { useDispatch, batch } from 'react-redux';

import { setWeatherData, setCity, setWeatherError } from '../features/weather/weatherSlice';
import { setIsLoading, setInitialLoad } from '../features/sys/sysSlice';

const useFetch = () => {
  const dispatch = useDispatch();

  const handleBadFetch = (err) => {
    batch(() => {
      dispatch((setIsLoading(false)));
      dispatch((setWeatherError(err)));
    });
  };

  const fetchWeatherData = (city) => {
    const query = `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    batch(() => {
      dispatch(setIsLoading(true));
      dispatch(setWeatherError(null));
    });
    fetch(query)
      .then((response) => response.json())
      .then((res) => {
        if (res.cod >= 400) {
          dispatch(setWeatherError(res.message));
          return;
        }
        batch(() => {
          dispatch(setIsLoading(false));
          dispatch(setCity(city));
          dispatch(setInitialLoad(true));
          dispatch(setWeatherData(res));
        });
      })
      .catch((err) => handleBadFetch(err));
  };

  const fetchLocationWeatherData = (location) => {
    const query = `${process.env.REACT_APP_API_URL}/weather?lat=${location?.lat}&lon=${location?.long}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    batch(() => {
      dispatch(setIsLoading(true));
      dispatch(setWeatherError(null));
    });
    fetch(query)
      .then((response) => response.json())
      .then((res) => {
        if (res.cod >= 400) {
          dispatch(setWeatherError(res.message));
          return;
        }
        batch(() => {
          dispatch(setIsLoading(false));
          dispatch(setCity(res.name));
          dispatch(setInitialLoad(true));
          dispatch(setWeatherData(res));
        });
      })
      .catch((err) => handleBadFetch(err));
  };

  return {
    fetchWeatherData,
    fetchLocationWeatherData,
  };
};

export default useFetch;
