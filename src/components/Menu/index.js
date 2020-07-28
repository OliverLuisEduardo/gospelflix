import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper} from './style.js';
//import './Menu.css'
import Button from '../Button';

function Menu() {
    return( 
        <MenuWrapper className="Menu">
            <a href="/">                 
            <LogoImage src={Logo} alt="GospelFlix logo" />
            </a>

            <Button as="a"  href="/">
                Novo Video
            </Button>               
        </MenuWrapper>
    );
}

export default Menu; //Exportando o menu