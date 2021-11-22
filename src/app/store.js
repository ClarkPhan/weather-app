import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import sysReducer from '../features/sys/sysSlice';
import weatherReducer from '../features/weather/weatherSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    sys: sysReducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
