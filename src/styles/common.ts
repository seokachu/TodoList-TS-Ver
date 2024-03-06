import styled from 'styled-components';

/*--------  LAYOUT ---------*/
export const Main = styled.main`
  text-align: center;
  text-transform: uppercase;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 0 108px;
  max-width: 1200px;
  min-width: 800px;
`;

/*-------- HEADER ---------*/
export const Header = styled.header`
  padding: 40px 0 30px;
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
  & h1 {
    text-align: center;
    font-weight: 600;
  }
`;

/*-------- FOOTER ---------*/
export const Footer = styled.footer`
  background-color: #eee;
  padding: 40px 0;
`;

export const Address = styled.address`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
  & > p {
    margin-bottom: 15px;
    text-align: center;
    font-size: 14px;
  }
`;

export const FooterLink = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  & > p > a > * {
    font-size: 32px;
  }
`;
