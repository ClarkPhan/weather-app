import { useDispatch, useSelector, batch } from 'react-redux';

import { setIsLoading, setError } from '../features/sys/sysSlice';
import { setCity, setWeatherData } from '../features/weather/weatherSlice';

const useRefresh = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weather.city);
  const query = `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  const refreshWeatherData = () => {
    batch(() => {
      dispatch(setIsLoading(true));
      dispatch(setError(null));
    });
    fetch(query)
      .then((response) => response.json())
      .then((res) => {
        if (res.cod >= 400) {
          dispatch(setError(res.message));
          return;
        }
        batch(() => {
          setTimeout(() => { dispatch(setIsLoading(false)); }, 500);
          dispatch(setCity(city));
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
  return { refreshWeatherData };
};

export default useRefresh;
