import { createSlice } from '@reduxjs/toolkit';

export const GOOGLE = 'Google';
export const WEATHER = 'Weather';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchMode: GOOGLE,
  },
  reducers: {
    setSearchMode: (state, action) => {
      state.searchMode = action.payload;
    },
  },
});

export const { setSearchMode } = searchSlice.actions;

export default searchSlice.reducer;
