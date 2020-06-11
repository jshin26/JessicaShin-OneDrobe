import React from 'react';
import './Home.scss';

import hero1 from '../../Asset/hero1.png';
import hero2 from '../../Asset/hero2.png';
import hero3 from '../../Asset/hero3.png';

import next from '../../Asset/arrow2.svg';
import logo from '../../Asset/logo_transparent.png';

// Home

let textArray = [
    '"welcome to onedrobe"',
    '"hello"',
    '"bye"'
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

    clickHandler = (e) => {
        e.preventDefault();
        if(this.state.text == textArray[0]) {
            this.setState({
                text: textArray[1],
                image: imageArray[1]
            })
        }
        else if (this.state.text == textArray[1]) {
            this.setState({
                text: textArray[2],
                image: imageArray[2]
            })
        }
        else if (this.state.text == textArray[2]) {
            this.setState({
                text: textArray[0],
                image: imageArray[0]
            })
        } 
    }

    render () {
        return (
            <section className="home">
                <div className="home--flex">
                    <img className="home__logo" src={logo} alt="logo"/>
                    <h1 className="home__title">{this.state.text}</h1>
                </div>
                <img className="home__img" src={this.state.image} alt="hero"/>
                <button className="home__button" onClick={this.clickHandler}><img src={next} alt="next"/></button>
            </section>
        )
    }
}

export default Home;