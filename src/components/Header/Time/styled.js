import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.titleColor};
  font-size: 6rem;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
`;
export default Title;
