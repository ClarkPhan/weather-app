import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { celciusToFahrenheit } from '../../../utils/unitConversion';

const Temperature = ({ value }) => {
  const useFahrenheit = useSelector((state) => (state.sys.useFahrenheit));
  if (useFahrenheit) {
    return celciusToFahrenheit(value);
  }
  return value;
};

Temperature.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Temperature;
