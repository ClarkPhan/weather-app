import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  LocationIcon,
  GoogleIcon,
  WeatherSearchIcon,
  SearchElement,
  SearchInput,
  ErrorMsg,
} from './styled';

import { setSearchMode, GOOGLE, WEATHER } from '../../features/search/searchSlice';

import useFetch from '../../hooks/useFetch';
import { setWeatherError } from '../../features/weather/weatherSlice';

const Search = () => {
  const dispatch = useDispatch();
  const { searchMode, error } = useSelector(
    (state) => ({
      searchMode: state.search.searchMode,
      error: state.weather.error,
    }),
  );
  const { fetchWeatherData, fetchLocationWeatherData } = useFetch();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Run as soon as page loads
    dispatch(setWeatherError(false));
  }, []);

  useEffect(() => {
    if (location) {
      fetchLocationWeatherData(location);
    }
  }, [location]);

  // Enter key case
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      if (searchMode === WEATHER) {
        fetchWeatherData(query);
        setQuery('');
      }
      if (searchMode === GOOGLE) {
        window.open(`https://www.google.com/search?q=${query}`, '_blank');
      }
    }
  };

  return (
    <>
      <SearchElement>
        <Button onClick={() => {
          if (searchMode === GOOGLE) {
            dispatch(setSearchMode(WEATHER));
          } else {
            dispatch(setSearchMode(GOOGLE));
          }
          dispatch(setWeatherError(false));
        }}
        >
          {searchMode === GOOGLE ? <GoogleIcon /> : <WeatherSearchIcon />}
        </Button>
        <SearchInput
          onChange={(event) => {
            dispatch(setWeatherError(false));
            setQuery(event.target.value);
          }}
          onKeyDown={onKeyDown}
          placeholder={searchMode === GOOGLE ? 'Search the web' : 'Search city'}
        />
        <Button
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                  lat: position.coords.latitude,
                  long: position.coords.longitude,
                });
              });
            } else {
              alert('Geolocation is not supported by this browser.');
            }
          }}
        >
          <LocationIcon />
        </Button>
      </SearchElement>
      {error && <ErrorMsg>Oops! The city you searched for is invalid.</ErrorMsg>}
    </>
  );
};

export default Search;
