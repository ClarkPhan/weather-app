/* eslint-disable react/prop-types */
// components/WeatherCard.js

import React from 'react';
import { Card } from 'react-bootstrap';
import './WeatherCard.css';

const WeatherCard = ({
  dt,
  tempMin,
  tempMax,
  main,
  icon,
  country,
  name,
}) => {
  const date = new Date(dt);
  console.log(`http://openweathermap.org/img/wn/${icon}@2x.png`);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>
          {name}
          {', '}
          {country}
        </Card.Title>
        <p>{main}</p>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()}
          {' '}
          -
          {' '}
          {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>
          Min:
          {' '}
          {tempMin}
        </p>
        {/* maximum temperature */}
        <p>
          Max:
          {' '}
          {tempMax}
        </p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
