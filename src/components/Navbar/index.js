import React, { useState, useEffect }from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtnLink, 
    NavBtn,
} from './NavbarElements'

const Navbar = ({toggle}) => {
 
    const [scrollNav, setScrollNav] = useState(false);

    const changNav = () =>{
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
 
    return (
        <>
         <IconContext.Provider value={{color: '#fff'}}>
          <Nav scrollNav= {scrollNav}>
              <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>
                      Robot-Man 
                  </NavLogo>
                  <MobileIcon onClick = {toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about'
                           smooth={true} duration={500} spy={true} exact= 'true' offset={-80}
                          >About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='discover'
                           smooth={true} duration={500} spy={true} exact= 'true' offset={-80}
                          >Discover</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='services'
                           smooth={true} duration={500} spy={true} exact= 'true' offset={-80}
                          >Services</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='enterprice'
                          smooth={true} duration={500} spy={true} exact= 'true' offset={-80}
                          >Enterpise</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='Contacts'
                          smooth={true} duration={500} spy={true} exact= 'true' offset={-80}
                          >Contact Us</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>
        </>
    )
}

export default Navbar
