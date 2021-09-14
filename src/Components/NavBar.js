import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from '../Data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';
// import ButtonIcon from '@material-ui/core/IconButton';


const Nav = styled.nav`  
    background : red;
    display: flex;
    height : 80px;
    padding-top: 2rem;
    z-index: 100;
    position: fixed;
    width : 100%;
    justify-content: space-between;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-item: center;
    padding: 0 1rem;
    height: 100%;
    cursor; pointer;
    text-decoration: none;
    
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    margin-left: 40px;
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right : -48px;
    @media screen and (max-width : 768px){
        display : none;
    }
`;

const MenuBar = styled(FaBars)`
    display : none;
    
    @media screen and (max-width : 768px){
        display : block;
        align-item : center;
        margin: -2px 20px 20px 20px;
        color : white;
        
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    dislpay : flex;
    align-items: center;
    margin-right : 24px;
    
    color : #fff;
    margin-top: -13px;
    @media screen and (max-width : 768px){
        display : none;
               }
    }
`; 

 



const NavBar = () => {
  return (
    <div>
     <Nav>
         <Logo to="/">Marlways</Logo>
    
             <MenuBar/>
         
        <NavMenu>
            {menuData.map((item, index) => (
                <NavMenuLinks to={item.link}  key={index}>{item.title}</NavMenuLinks>
            ))}
        </NavMenu>

        <NavBtn>
                <Button to = "/contact" primary = 'true'>Contact Us</Button>
        </NavBtn>
        
     </Nav>
    </div>
  )
}

export default NavBar
