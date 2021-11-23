import { createSlice } from '@reduxjs/toolkit';
import date from 'date-and-time';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    lastUpdated: null,
    city: null,
    weatherData: {
      main: {
        humidity: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
      },
      name: '',
      sys: {
        country: '',
        sunrise: 0,
        sunset: 0,
      },
      weather: {
        id: 200,
        main: '',
        description: '',
        icon: '',
      },
      wind: {
        deg: 0,
        speed: 0,
      },
    },
    extendedWeatherData: [],
    isError: false,
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
      state.lastUpdated = date.format(new Date(), 'dddd MMMM DD, h:mm:ss A');
    },
  },
});

export const { setCity, setWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
