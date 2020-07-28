import React from 'react';
import { FooterBase, LogoImage } from './styles';
import Logo from '../../assets/img/Logo.png';
function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <LogoImage src={Logo} alt="Logo GospelFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          #ImersãoReact da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
