import React from 'react';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Weather from '../components/Weather/Weather';

const Home = () => (
  <>
    <Header />
    <Search />
    <Weather />
    {/* <Forecast />
    <Footer /> */}
  </>
);

export default Home;
