import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DarkModeToggle from 'react-dark-mode-toggle';
import Time from './Time/Time';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';

import {
  GithubLink,
  HeaderContainer,
  HeaderIconsContainer,
} from './styled';

import { toggleDarkMode } from '../../features/theme/themeSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <HeaderContainer>
      <Time />
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
