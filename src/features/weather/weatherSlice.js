import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: null,
    weatherData: {
      main: {
        feels_like: 0,
        humidity: 0,
        pressure: 0,
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
    },
  },
});

export const { setCity, setWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
