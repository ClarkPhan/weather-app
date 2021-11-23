import styled from 'styled-components';

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;
  cursor: pointer;
  top: 5px;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 55px;
  background-color: ${({ theme }) => theme.temperatureSwitch.backgroundColor};
  .on,
  .off {
    color: ${({ theme }) => theme.temperatureSwitch.textColor};
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    svg {
      width: 20px;
      fill: white;
    }
  }
  .on {
    padding-right: 15px;
  }
  .off {
    padding-left: 15px;
  }
`;

export const Slider = styled.div`
  position: absolute;
  height: 16px;
  width: 18px;
  left: 2px;
  top: 2px;
  background-color: ${({ theme }) => theme.temperatureSwitch.sliderColor};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 44px;
`;
