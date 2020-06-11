import React from 'react';

import { NavLink, Link } from 'react-router-dom';
import './SubHeader.scss';
import searchIcon from '../../Asset/Icon-search.svg';
import fav from '../../Asset/heart.svg';

// SubHeader

const SubHeader = (props) => {
    
    let {search, updateSearch} = props
    return (
        <section className="subheader">
            <div className="subheader__search">
                <form className="subheader__search-form" >
                    <img src={searchIcon} alt="search-icon"/>
                    <input className="subheader__search-input" value={search} onChange={updateSearch} type="text" placeholder="What are you looking for?"/>
                </form>

                <Link className="subheader__fav" exact to="/favourites">
                    <p className="subheader__fav-text">favourites</p>
                    <img className="subheader__fav-img" src={fav} alt="favourites link"/>
                </Link>
            </div>

            <div className="subheader__nav">
                <NavLink className="subheader__link" exact to="/product/">result</NavLink>
                <NavLink className="subheader__link" to="/product/outer">outer</NavLink>
                <NavLink className="subheader__link" to="/product/top">top</NavLink>
                <NavLink className="subheader__link" to="/product/pants">pants</NavLink>
                <NavLink className="subheader__link" to="/product/skirt">skirt</NavLink>
                <NavLink className="subheader__link" to="/product/dress">dress</NavLink>
                <NavLink className="subheader__link" to="/product/shoes">shoes</NavLink>
                <NavLink className="subheader__link" to="/product/bag">bag</NavLink>
            </div>
        </section>
    )
}

export default SubHeader;