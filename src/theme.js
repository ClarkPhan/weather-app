import lightBg from './assets/lightBg.svg';
import bg from './assets/background.jpg';

export const lightTheme = {
  titleColor: '#2F5D8A',
  backgroundImage: lightBg,
  backgroundGradient: {
    color1: '#F9FFFF',
    color2: '#38C8E6',
  },
  panelBgColor: '#FFFFFF',
  panelTitleColor: '#727E8E',
  forecastPanelBgColor: 'rgba(255, 255, 255, 0.75)',
  searchInput: {
    color: '#727E8E',
    placeholderColor: '#6898d5',
  },
  temperatureSwitch: {
    backgroundColor: '#77b1c7',
    sliderColor: '#fff',
    textColor: '#fff',
  },
  smallIconColor: '#A1B9CE',
  smallIconTextColor: '#7B98B2',
  lastUpdatedTextColor: '#2F5D8A',
};

export const darkTheme = {
  titleColor: 'white',
  backgroundImage: bg,
  backgroundGradient: {
    color1: '#788487',
    color2: '#02101D',
  },
  panelBgColor: '#212121',
  panelTitleColor: 'white',
  forecastPanelBgColor: 'rgba(5, 26, 51, 0.75)',
  searchInput: {
    color: '#c2c2c2',
    placeholderColor: 'white',
  },
  temperatureSwitch: {
    backgroundColor: 'white',
    sliderColor: '#212121',
    textColor: '#212121',
  },
  smallIconColor: '#c2c2c2',
  smallIconTextColor: 'white',
  lastUpdatedTextColor: 'white',
  footer: {
    textColor: 'white',
  },
};
