import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as HighIcon } from '../../assets/high-icon.svg';
import { ReactComponent as LowIcon } from '../../assets/low-icon.svg';

import { ReactComponent as HumidityIcon } from '../../assets/humidity-icon.svg';
import { ReactComponent as PressureIcon } from '../../assets/pressure-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/wind-icon.svg';

import { toggleTemperatureScale } from '../../features/sys/sysSlice';

import { kmToMile } from '../../utils/unitConversion';

import WeatherIconSwitcher from './WeatherIconSwitcher/WeatherIconSwitcher';

import {
  CurrentWeather,
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  FeelsLike,
  HighLowContainer,
  InfoRow,
  SectionTitle,
  WeatherContainer,
  WeatherDegree,
} from './styled';

import Temperature from './Temperature/Temperature';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import Refresh from './Refresh/Refresh';

const Weather = () => {
  const {
    weather,
    useFahrenheit,
    initialLoad,
    lastUpdated,
    error,
  } = useSelector((store) => ({
    weather: store.weather.weatherData,
    useFahrenheit: store.sys.useFahrenheit,
    initialLoad: store.sys.initialLoad,
    error: store.weather.error,
    lastUpdated: store.weather.lastUpdated,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      console.log('Cannot load weather for this place');
    }
  }, [error]);

  if (!initialLoad) return null;

  return (
    <WeatherContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle>
          Current Weather
        </SectionTitle>
        <div>
          <Refresh />
        </div>
      </div>

      <CurrentWeatherContainer>
        <CurrentWeather>
          <h4>{weather.name}</h4>
          <div style={{ display: 'flex' }}>
            <WeatherIconSwitcher code={weather.weather.id} big />
            <span>
              <Temperature value={weather.main.temp} />
              <sup>&deg;</sup>
            </span>
          </div>
          <h6>{weather.weather.description}</h6>
        </CurrentWeather>

        <CurrentWeatherInfo>
          <FeelsLike>
            Feels like
            {' '}
            <Temperature value={weather.main.feels_like} />
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              <Temperature value={weather.main.temp_max} />
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              <Temperature value={weather.main.temp_min} />
              <sup>&deg;</sup>
            </WeatherDegree>
          </HighLowContainer>
          <InfoRow>
            <div>
              <HumidityIcon />
              {' '}
              Humidity
            </div>
            <span>
              {weather.main.humidity}
              %
            </span>
          </InfoRow>
          <InfoRow>
            <div>
              <WindIcon />
              {' '}
              Wind
            </div>
            <span>
              {!useFahrenheit ? weather.wind.speed : kmToMile(weather.wind.speed)}
              {!useFahrenheit ? 'kph' : 'mph'}
            </span>
          </InfoRow>
          <InfoRow>
            <div>
              <PressureIcon />
              {' '}
              Pressure
            </div>
            <span>
              {weather.main.pressure}
              hPa
            </span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <ToggleSwitch onClick={() => dispatch(toggleTemperatureScale())} />
        </div>
        <SectionTitle>
          Last Updated:
          {' '}
          {lastUpdated}
        </SectionTitle>
      </div>

    </WeatherContainer>
  );
};

export default Weather;
