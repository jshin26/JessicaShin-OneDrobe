import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.scss';

import logo from '../../Asset/logo.png';

// HEADER

class Header extends React.Component {

    render() {
        return (
            <header className="header">

                <Link exact to="/" className="header__logo">
                    <img className="header__logo-img" src={logo} alt="logo"/>
                </Link>
                <nav className="header__nav">
                    <NavLink className="header__link" exact to="/">home</NavLink>
                    <NavLink className="header__link" exact to="/about">about</NavLink>
                    <NavLink className="header__link" exact to="/product">search</NavLink>
                    <NavLink className="header__link" exact to="/favourites">favourites</NavLink>

                </nav>

            </header>
        )
    }
}

export default Header;