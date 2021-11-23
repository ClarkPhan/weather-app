/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { celciusToFahrenheit } from '../../../utils/unitConversion';

const Temperature = (props) => {
  const { value } = props;
  const useFahrenheit = useSelector((state) => (state.sys.useFahrenheit));

  if (useFahrenheit) {
    return <>{celciusToFahrenheit(value)}</>;
  }
  return value;
};

export default Temperature;
