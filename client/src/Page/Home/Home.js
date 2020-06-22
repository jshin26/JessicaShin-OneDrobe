import React from 'react';
import './Home.scss';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

import hero1 from '../../Asset/hero1.png';
import hero from '../../Asset/herooo.png';
import herotext from '../../Asset/heroo.png';
import hero2 from '../../Asset/hero2.jpg';
import hero3 from '../../Asset/hero3.png';
import back from '../../Asset/arrow1.svg';
import next from '../../Asset/arrow2.svg';
import searchIcon from '../../Asset/Icon-search.svg';

// Home

let textArray = [
    '"Search more than 50 brands, with just one click"',
    '"Never struggle to find a perfect apparel"',
    '"Compare similar looks, from different brands"'
]

let imageArray = [
    hero1,
    hero2,
    hero3
]

class Home extends React.Component {

    state={
        text: textArray[0],
        image: imageArray[0]
    }

    clickNext = (e) => {
        e.preventDefault();
        if(this.state.image === imageArray[0]) {
            this.setState({
                text: textArray[1],
                image: imageArray[1]
            })
        }
        else if (this.state.image === imageArray[1]) {
            this.setState({
                text: textArray[2],
                image: imageArray[2]
            })
        }
        else if (this.state.image === imageArray[2]) {
            this.setState({
                text: textArray[0],
                image: imageArray[0]
            })
        } 
    }

    clickBack = (e) => {
        e.preventDefault();
        if(this.state.image === imageArray[0]) {
            this.setState({
                text: textArray[2],
                image: imageArray[2]
            })
        }
        else if (this.state.image === imageArray[1]) {
            this.setState({
                text: textArray[0],
                image: imageArray[0]
            })
        }
        else if (this.state.image === imageArray[2]) {
            this.setState({
                text: textArray[1],
                image: imageArray[1]
            })
        } 
    }

    render () {
        return (
            <section className="home">
               
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
                
                <div className="home--flex">
                    <img className="home__img" src={hero} alt="hero"/>
                </div>

                <div className="home__mobile">
                    <img className="home__img" src={hero2} alt="hero2"/>
                    <img className="home__img" src={hero3} alt="hero3"/>
                </div>

                <Link exact to="/product" className="home__search">
                    <img className="home__search-icon" src={searchIcon} alt="search-icon"/>
                    <button className="home__search-btn" >click to search now</button>
                </Link>
            </section>
        )
    }
}

export default Home;