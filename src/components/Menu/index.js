import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper} from './style.js';
import {Link} from "react-router-dom"
import Button from '../Button';

function Menu() {
    return( 
        <MenuWrapper className="Menu">
            <Link to="/">                 
            <LogoImage src={Logo} alt="GospelFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink"  to="/cadastro/Video">
                Novo Video
            </Button>               
        </MenuWrapper>
    );
}

export default Menu;