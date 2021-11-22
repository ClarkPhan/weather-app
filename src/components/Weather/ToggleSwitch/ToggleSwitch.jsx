import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Slider } from './styled';

const ToggleSwitch = (props) => {
  const [toggled, setToggled] = React.useState(false);
  const { onClick } = props;
  return (
    <Switch
      onClick={() => {
        setToggled((checked) => !checked);
        onClick();
      }}
    >
      {toggled && <span className="on">C</span>}
      {!toggled && <span className="off">F</span>}
      <Slider style={{ transform: toggled ? ' translateX(28px)' : ' translateX(0px)' }} />
    </Switch>
  );
};

ToggleSwitch.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ToggleSwitch;
