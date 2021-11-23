import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`;

export const GithubLink = styled.a`
  margin-left: 1rem;
  svg {
    fill: ${({ theme }) => theme.appTitleColor};
  }
  &:hover svg {
    fill: #20546a;
  }
`;

export const HeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
