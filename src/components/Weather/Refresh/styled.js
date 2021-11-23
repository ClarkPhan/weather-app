/* eslint-disable import/no-extraneous-dependencies */
import styled, { css, keyframes } from 'styled-components';
import { Refresh } from '@styled-icons/boxicons-regular/Refresh';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const RefreshButton = styled.button`
border: none;
background-color: transparent;
`;

export const RefreshIcon = styled(Refresh)`
height: 24px;
width: 24px;
fill: #4a6fa1;
animation: ${(props) => (props.isLoading ? css`${rotate} .5s linear infinite;` : null)}
`;
