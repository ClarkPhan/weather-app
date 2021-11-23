import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import {
  Button,
  LocationIcon,
  GoogleIcon,
  WeatherSearchIcon,
  SearchElement,
  SearchInput,
} from './styled';

import { setSearchMode, GOOGLE, WEATHER } from '../../features/search/searchSlice';

import useFetch from '../../hooks/useFetch';

const Search = () => {
  const dispatch = useDispatch();
  const searchMode = useSelector((state) => state.search.searchMode);
  const { fetchWeatherData, fetchLocationWeatherData } = useFetch();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState(null);

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
    <SearchElement>
      <Button onClick={() => {
        if (searchMode === GOOGLE) {
          dispatch(setSearchMode(WEATHER));
        } else {
          dispatch(setSearchMode(GOOGLE));
        }
      }}
      >
        {searchMode === GOOGLE ? <GoogleIcon /> : <WeatherSearchIcon />}
      </Button>
      <DebounceInput
        element={SearchInput}
        debounceTimeout={0}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Search"
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
  );
};

export default Search;
