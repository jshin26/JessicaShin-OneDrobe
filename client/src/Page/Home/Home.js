import React from 'react';
import './Home.scss';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

import hero from '../../Asset/herooo.png';
import searchIcon from '../../Asset/Icon-search.svg';

// Home

const Home = () => {

    return (
        <section className="home">
            
            
            <div className="home--flex">
                <img className="home__img" src={hero} alt="hero"/>
            </div>
            <Typical 
                loop={Infinity}
                wrapper="h2"
                className="home__title"
                steps={[
                    1500,
                    "Search more than 50 brands, with just one click",
                    2000,
                    "Never struggle to find a perfect apparel",
                    2000,
                    "Compare similar looks, from different brands",
                    2000
                ]}
            />

            <Link exact to="/product" className="home__search">
                <img className="home__search-icon" src={searchIcon} alt="search-icon"/>
                <button className="home__search-btn" >click to search now</button>
            </Link>
        </section>
    )

}

export default Home;