import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import './style.css';
import { GrLocation } from 'react-icons/gr';
import { weatherDataInterface } from '../../redux/types';

import { BiTimeFive } from 'react-icons/bi';

function WeatherUI(props: {
  handleClickBack: () => void;
  weather: weatherDataInterface;
}) {
  return (
    <>
      <div className='heading border '>
        <h2 className='heading-icon'>
          <HiArrowLeft className='icon' onClick={props.handleClickBack} />
          Weather App
        </h2>
      </div>
      <br />
      <div className='form-container border flex-column'>
        <img
          src={`${process.env.REACT_APP_IMG_URL}${props.weather.icon}@4x.png`}
          width={100}
          alt='Weather icon'
        />

        <p className='temperature'>
          {props.weather.temp}
          <sup>o</sup> C
        </p>
        <p className='weather-desc'>{props.weather.main}</p>
        <p className='location'>
          <GrLocation /> {props.weather.city},&nbsp;{props.weather.country}
        </p>
        <p className='location'>
          <GrLocation />
          Longitude: {props.weather.cord.lon} &nbsp;&nbsp;Latitude:{' '}
          {props.weather.cord.lat}
        </p>
        <p className='location'>
          <BiTimeFive /> Timezone : {props.weather.time}
        </p>
      </div>
    </>
  );
}

export default WeatherUI;
