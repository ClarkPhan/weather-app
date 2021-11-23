import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as HighIcon } from '../../assets/high-icon.svg';
import { ReactComponent as LowIcon } from '../../assets/low-icon.svg';

import { ReactComponent as HumidityIcon } from '../../assets/humidity-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/wind-icon.svg';

import { toggleTemperatureScale } from '../../features/sys/sysSlice';

import { kmToMile } from '../../utils/unitConversion';

import WeatherIconSwitcher from './WeatherIconSwitcher/WeatherIconSwitcher';

import {
  CurrentWeather,
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  WeatherDescription,
  HighLowContainer,
  InfoRow,
  LastUpdatedSection,
  WeatherContainer,
  WeatherDegree,
} from './styled';

import Temperature from './Temperature/Temperature';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import Refresh from './Refresh/Refresh';

const Weather = () => {
  const {
    weatherData,
    useFahrenheit,
    initialLoad,
    lastUpdated,
    error,
  } = useSelector((state) => ({
    weatherData: state.weather.weatherData,
    useFahrenheit: state.sys.useFahrenheit,
    initialLoad: state.sys.initialLoad,
    error: state.weather.error,
    lastUpdated: state.weather.lastUpdated,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      console.log('Cannot load weather for this place');
    }
  }, [error]);

  if (!initialLoad) return null;
  const {
    weather,
    main,
    wind,
    name,
  } = weatherData;
  const { id, description } = weather[0];
  const {
    temp,
    temp_max: tempMax,
    temp_min: tempMin,
    humidity,
  } = main;
  return (
    <WeatherContainer>
      <CurrentWeatherContainer>
        <CurrentWeather>
          <WeatherDescription>{name}</WeatherDescription>
          <div style={{ display: 'flex' }}>
            <WeatherIconSwitcher code={id} big />
            <span>
              <Temperature value={temp} />
              <sup>&deg;</sup>
            </span>
          </div>
        </CurrentWeather>
        <CurrentWeatherInfo>
          <WeatherDescription>{description}</WeatherDescription>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              <Temperature value={tempMax} />
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              <Temperature value={tempMin} />
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
              {humidity}
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
              {!useFahrenheit ? wind.speed : kmToMile(wind.speed)}
              {' '}
              {!useFahrenheit ? 'kph' : 'mph'}
            </span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <ToggleSwitch onClick={() => dispatch(toggleTemperatureScale())} />
        </div>
        <LastUpdatedSection>
          Last Updated:
          {' '}
          {lastUpdated}
        </LastUpdatedSection>
        <Refresh />
      </div>

    </WeatherContainer>
  );
};

export default Weather;
