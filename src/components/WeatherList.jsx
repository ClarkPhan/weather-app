// components/WeatherList.js
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import WeatherCard from './WeatherCard';

const WeatherList = ({ weatherData }) => {
  const {
    dt,
    main,
    weather,
    sys,
    name,
  } = weatherData;
  return (
    <Row>
      <Col key={dt}>
        <WeatherCard
          tempMax={main?.temp_max}
          tempMin={main?.temp_min}
          dt={dt * 1000}
          main={weather[0].main}
          icon={weather[0].icon}
          country={sys?.country}
          name={name}
        />
      </Col>
    </Row>
  );
};

WeatherList.propTypes = {
  weatherData: PropTypes.shape({
    dt: PropTypes.number,
    main: PropTypes.shape({
      temp_max: PropTypes.number,
      temp_min: PropTypes.number,
    }),
    sys: PropTypes.shape({
      country: PropTypes.string,
    }),
    name: PropTypes.string,
    weather: PropTypes.arrayOf(PropTypes.shape({
      main: PropTypes.string,
      icon: PropTypes.string,
    })),
  }).isRequired,

};

export default WeatherList;
