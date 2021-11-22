import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styled';
import Home from './pages/Home';
import { darkTheme, lightTheme } from './theme';

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
