import React from 'react';

import { NavLink, Link } from 'react-router-dom';
import './BrandHeader.scss';
import searchIcon from '../../Asset/Icon-search.svg';
import star from '../../Asset/star.svg';
import menu from '../../Asset/menu.svg';


// SubHeader

class SubHeader extends React.Component {

    render () {
        let {search, updateSearch} = this.props
        return (
            <section className="subheader">
                <div className="subheader__search">

                    <form className="subheader__search-form" >
                        <img src={searchIcon} alt="search-icon"/>
                        <input className="subheader__search-input" value={search} onChange={updateSearch} type="text" placeholder="What are you looking for?"/>
                    </form>

                    <div className="subheader__mobile--flex">
                        <div className="subheader__mobile--sub">
                            <Link className="subheader__fav" exact to="/bookmarks">
                                <p className="subheader__fav-text">bookmarks</p>
                                <img className="subheader__fav-img" src={star} alt="favourites link"/>
                            </Link>
                            <div className="subheader__mobile">
                                <img className="subheader__mobile-img" src={menu} alt="menu icon" onClick={this.showMenu}/>
                            </div> 
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default SubHeader;