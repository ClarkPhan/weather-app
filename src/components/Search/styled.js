/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { Google } from '@styled-icons/boxicons-logos/Google';
import { WeatherCloudy } from '@styled-icons/fluentui-system-filled/WeatherCloudy';
import { ReactComponent as LocationIconSvg } from '../../assets/location-icon.svg';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  svg {
    fill: ${({ theme }) => theme.titleColor};
  }
`;

export const SearchElement = styled.div`
  position: relative;
  height: 3.25rem;
  border-radius: 26px;
  background: ${({ theme }) => theme.panelBgColor};
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const SearchInput = styled.input`
  flex: 1;
  margin-left: 1rem;
  height: 3.25rem;
  border: none;
  background-color: ${({ theme }) => theme.panelBgColor};
  font-size: 1rem;
  color: ${({ theme }) => theme.searchInput.color};
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.searchInput.placeholderColor};
  }
`;

export const ErrorMsg = styled.span`
  align-items: center;
  color: red;
  margin-left: 1.2rem;
  @media (max-width: 1024px) {
    font-size: .75rem;
  }
`;

export const GoogleIcon = styled(Google)`
  width: 23px;
  height: 23px;
  margin-left: 1.2rem;
  fill: ${({ theme }) => theme.titleColor};
`;

export const WeatherSearchIcon = styled(WeatherCloudy)`
  width: 23px;
  height: 23px;
  margin-left: 1.2rem;
  fill: ${({ theme }) => theme.titleColor};
`;

export const LocationIcon = styled(LocationIconSvg)`
  width: 23px;
  height: 23px;
  margin-right: 1.2rem;
  fill: #4a6fa1;
`;
