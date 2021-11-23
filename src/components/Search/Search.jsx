// components/Search.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
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
  const { fetchWeatherData } = useFetch();
  const isLoading = useSelector((state) => (state.sys.isLoading));

  const [city, setCity] = useState('');
  const [location, setLocation] = useState(null);

  const query = `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  const locationQuery = `${process.env.REACT_APP_API_URL}/weather?lat=${location?.lat}&lon=${location?.long}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

  useEffect(() => {
    if (location) {
      fetchWeatherData(locationQuery);
    }
  }, [location]);

  // Enter key case
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      fetchWeatherData(query);
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
      {isLoading && <Spinner animation="grow" />}
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
