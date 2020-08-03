import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase, LogoImage } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <LogoImage src={Logo} alt="Logo GospelFlix" />
      </Link>
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
