import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.scss';

import logo from '../../Asset/logo.png';
import ChatModal from '../ChatModal/ChatModal';

// HEADER

const Header =() =>{


        return (

            <div className="side">
                
                <Link exact to="/" className="side__logo">
                    <img className="side__logo-img" src={logo} alt="logo"/>
                </Link>
                <nav className="side__nav">
                    <NavLink className="side__link" exact to="/">home</NavLink>
                    <NavLink className="side__link" exact to="/about">about</NavLink>
                    <NavLink className="side__link" exact to="/product">search</NavLink>
                    <NavLink className="side__link" exact to="/favourites">favourites</NavLink>
    
                </nav>

                {/* <ChatModal /> */}
    
            </div>
        )

}

export default Header;