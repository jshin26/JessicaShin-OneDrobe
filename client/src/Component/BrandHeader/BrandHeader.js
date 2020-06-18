import React from 'react';
import './BrandHeader.scss'

import { Link } from 'react-router-dom';
import './BrandHeader.scss';
import searchIcon from '../../Asset/Icon-search.svg';
import star from '../../Asset/star.svg';


// SubHeader

class SubHeader extends React.Component {

    render () {
        let {search, updateSearch} = this.props
        return (
            <section className="subheader">
                <div className="subheader__search">

                    <div className="brand__header">
                        <form className="brand__header-form">
                            <img src={searchIcon} alt="search-icon"/>
                            <input className="subheader__search-input" value={search} onChange={updateSearch} type="text" placeholder="What are you looking for?"/>
                        </form>
                        <p className="brand__header-text">use '#' to find styles! <span>e.g. #sportswear #office #lovely</span></p>
                    </div>

                    <div className="subheader__mobile--flex">
                        <Link className="subheader__fav" exact to="/bookmarks">
                            <p className="subheader__fav-text">bookmarks</p>
                            <img className="subheader__fav-img" src={star} alt="favourites link"/>
                        </Link>
                    </div>
                    {/* <Link exact to="/brands/">brands</Link>
                    <Link exact to="/brands/bookmarks">bookmarks</Link> */}

                </div>
            </section>
        )
    }
}

export default SubHeader;