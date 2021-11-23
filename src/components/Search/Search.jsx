// components/Search.js
import React, { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import {
  LocationButton,
  LocationIcon,
  SearchElement,
  SearchIcon,
  SearchInput,
} from './styled';

import useFetch from '../../hooks/useFetch';

const Search = () => {
  const { fetchWeatherData, fetchLocationWeatherData } = useFetch();
  const [city, setCity] = useState('');
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (location) {
      fetchLocationWeatherData(location);
    }
  }, [location]);

  // Enter key case
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      fetchWeatherData(city);
    }
  };

  return (
    <SearchElement>
      <SearchIcon />
      <DebounceInput
        element={SearchInput}
        debounceTimeout={0}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Search"
      />
      <LocationButton
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
      </LocationButton>
    </SearchElement>
  );
};

export default Search;
