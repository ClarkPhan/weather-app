import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as HighIcon } from '../../assets/high-icon.svg';
import { ReactComponent as LowIcon } from '../../assets/low-icon.svg';

import { ReactComponent as HumidityIcon } from '../../assets/humidity-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/wind-icon.svg';

import { toggleTemperatureScale } from '../../features/sys/sysSlice';

import { kmToMile } from '../../utils/unitConversion';

import WeatherIconSwitcher from './WeatherIconSwitcher/WeatherIconSwitcher';

import useRefresh from '../../hooks/useRefresh';

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
  const dispatch = useDispatch();

  const { refreshWeatherData } = useRefresh();

  useEffect(() => {
    refreshWeatherData();
  }, []);

  const {
    weatherData,
    useFahrenheit,
    initialLoad,
    lastUpdated,
  } = useSelector((state) => ({
    weatherData: state.weather.weatherData,
    useFahrenheit: state.sys.useFahrenheit,
    initialLoad: state.sys.initialLoad,
    error: state.weather.error,
    lastUpdated: state.weather.lastUpdated,
  }));

  const {
    weather,
    main,
    wind,
    name,
  } = weatherData;

  if (!initialLoad || parseInt(weatherData.cod, 10) >= 400 || !weather.length) return null;

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
              {!useFahrenheit ? 'C' : 'F'}
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
              {!useFahrenheit ? 'C' : 'F'}
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              <Temperature value={tempMin} />
              <sup>&deg;</sup>
              {!useFahrenheit ? 'C' : 'F'}
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
              {!useFahrenheit ? Math.round(wind.speed) : kmToMile(wind.speed)}
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
