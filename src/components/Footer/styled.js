import styled from 'styled-components';

const FooterContainer = styled.footer`
  p {
    padding: 1rem 0;
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.footer.textColor};
    a {
      color: 'white';
      text-decoration: none;
    }
  }
`;

export default FooterContainer;
