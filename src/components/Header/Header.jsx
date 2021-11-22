import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DarkModeToggle from 'react-dark-mode-toggle';
import date from 'date-and-time';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';

import {
  GithubLink,
  HeaderContainer,
  Title,
  HeaderIconsContainer,
} from './styled';

import { toggleDarkMode } from '../../features/theme/themeSlice';
import { tick } from '../../features/sys/sysSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const now = useSelector((state) => state.sys.now);

  const refreshClock = () => dispatch(tick());

  useEffect(() => {
    const timerTd = setInterval(refreshClock, 1000);
    return () => clearInterval(timerTd);
  });

  return (
    <HeaderContainer>
      <Title>{date.format(now, 'h:mm:ss A MMM DD YYYY')}</Title>
      <HeaderIconsContainer>
        <DarkModeToggle
          checked={isDarkMode}
          onChange={() => dispatch(toggleDarkMode())}
          size={60}
        />
        <GithubLink href="http://www.github.com/clarkphan">
          <GithubIcon />
        </GithubLink>
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
