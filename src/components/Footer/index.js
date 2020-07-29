import React from 'react';
import { FooterBase, LogoImage } from './styles';
import Logo from '../../assets/img/Logo.png';
import {Link} from "react-router-dom"

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
