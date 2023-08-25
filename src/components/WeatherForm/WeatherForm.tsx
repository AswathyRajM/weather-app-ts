import { useState } from 'react';
import './style.css';
import Loader from '../Loader/Loader';
import ErrorComponent from '../Errors/Error';
import WeatherUI from '../WeatherUI/WeatherUI';
import { useDispatch, useSelector } from 'react-redux';
import { clearState, getWeatherData } from '../../redux/weatherSlice';
import { AppDispatch, RootState } from '../../redux/store';

function Weather() {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, error, weatherData } = useSelector(
    (state: RootState) => state.weather
  );

  const handleClickBack = () => {
    setSearchTerm(null);
    dispatch(clearState());
  };

  const handleInputChange = (city: string) => {
    setSearchTerm(city);
  };

  const handleGetWeather = () => {
    if (!searchTerm) return;

    dispatch(getWeatherData(`${searchTerm}`));
  };

  return (
    <div className='container'>
      <div className='weather-container'>
        {weatherData.city || weatherData.country || weatherData.temp ? (
          <WeatherUI handleClickBack={handleClickBack} weather={weatherData} />
        ) : (
          <>
            <div className='heading border'>
              <h2>Weather App</h2>
            </div>
            <br />
            <div className='form-container'>
              <div className='form'>
                <input
                  type='text'
                  id='input'
                  placeholder='Enter city name'
                  onChange={(e) => {
                    handleInputChange(e.target.value);
                  }}
                />
                <button className='btn' onClick={handleGetWeather}>
                  Get Weather
                </button>

                {error && <ErrorComponent errMsg={error} />}
              </div>
            </div>
          </>
        )}
      </div>
      {isLoading && <Loader />}
    </div>
  );
}

export default Weather;
