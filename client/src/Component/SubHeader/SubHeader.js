import React from 'react';
import { NavLink } from 'react-router-dom';
import './SubHeader.scss';

// SubHeader

const SubHeader = () => {
    return (
        <section className="subheader">
            <div className="subheader__search">
                <form className="subheader__search-form" >
                    <input className="subheader__search-input" type="text" placeholder="What are you looking for?"/>
                </form>
            </div>

            <div className="subheader__nav">
                <NavLink className="subheader__link" to="/product/outer">Outer</NavLink>
                <NavLink className="subheader__link" to="/product/top">Top</NavLink>
                <NavLink className="subheader__link" to="/product/pants">Pants</NavLink>
                <NavLink className="subheader__link" to="/product/skirt">Skirt</NavLink>
                <NavLink className="subheader__link" to="/product/dress">Dress</NavLink>
                <NavLink className="subheader__link" to="/product/shoes">Shoes</NavLink>
                <NavLink className="subheader__link" to="/product/bag">Bag</NavLink>
            </div>
        </section>
    )
}

export default SubHeader;