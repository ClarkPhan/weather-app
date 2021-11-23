import { createSlice } from '@reduxjs/toolkit';
import date from 'date-and-time';

export const sysSlice = createSlice({
  name: 'sys',
  initialState: {
    isLoading: false,
    initialLoad: false,
    now: date.format(new Date(), 'h:mm:ss A'),
    useFahrenheit: true,
    error: null,
  },
  reducers: {
    setIsLoading: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = action.payload;
    },
    tick: (state) => {
      state.now = date.format(new Date(), 'h:mm:ss A');
    },
    toggleTemperatureScale: (state) => {
      state.useFahrenheit = !state.useFahrenheit;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setInitialLoad: (state) => {
      state.initialLoad = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsLoading,
  tick,
  toggleTemperatureScale,
  setError,
  setInitialLoad,
} = sysSlice.actions;

export default sysSlice.reducer;
