import styled from 'styled-components';

export const LogoImage = styled.img`
    max-width: 168px;
   
    @media (max-width: 800px) {
        max-width: 105px;
    }
`;

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 5px;
  padding-top: 10px;
  color: var(--white);
  text-align: center;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
