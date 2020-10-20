import React from 'react';
import Logo from '../img/logo.png'
import '../css/header.css';
// check how to use different components in 1 main one
function Header() {
      return (
        <header>
            <img src={Logo} className="logo" alt="logo" />
            <div className="header-inf">
                <div className="headerObj">
                    <h2>About</h2>
                    <div className="line"></div>
                </div>
                <div className="headerObj"><h2>Projects</h2><div className="line"></div></div>
                <div className="headerObj"><h2>Contact</h2><div className="line"></div></div>
            </div>
        </header>
      );
}

export default Header;  