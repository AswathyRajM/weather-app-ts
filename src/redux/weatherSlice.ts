import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeather } from '../util/getWeatherDataApi';
import { userInterface, weather } from './types';

export const getWeatherData = createAsyncThunk(
  '/getWeatherData',
  async (query: string) => {
    const response = await getWeather(query);
    return response;
  }
);

const initialState: userInterface = {
  weatherData: weather,
  error: null,
  isLoading: false,
};

export const weatherReducer = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearState: (state) => {
      state.weatherData = weather;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.isLoading = false;
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message + '! please try again' ||
          'Something went wrong. Please try again';
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearState } = weatherReducer.actions;

export default weatherReducer.reducer;
