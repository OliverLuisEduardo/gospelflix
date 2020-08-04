import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import { LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="GospelFlix logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
