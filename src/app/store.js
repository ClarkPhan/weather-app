import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from '../features/theme/themeSlice';
import sysReducer from '../features/sys/sysSlice';
import weatherReducer from '../features/weather/weatherSlice';

const reducers = combineReducers({
  theme: themeReducer,
  sys: sysReducer,
  weather: weatherReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
