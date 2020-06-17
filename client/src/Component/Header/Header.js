import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.scss';

import logo from '../../Asset/logo_transparent.png';
import down from '../../Asset/arrow2.svg';
import up from '../../Asset/arrow1.svg';
import ChatModal from '../ChatModal/ChatModal';

// HEADER

class Header extends React.Component {

    state={
        open: false
    }
    componentDidMount() {
        document.addEventListener("click", this.closeHandle);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.closeHandle);
    }
    openHandle = (e) => {
        const open = this.state.open;
        this.setState({
            open: !open
        })
    }

    closeHandle = (e) => {
        if (e.target.classList[0] !== "side__user-down") {
            this.setState({
                open: false
            })
        }
    }

    render () {

        let {signout, userImage, userName, userEmail} = this.props;

        return (

            <div className="side">
                
                <Link exact to="/" className="side__logo"> 
                    <img className="side__logo-img" src={logo} alt="logo"/>
                </Link>
    
                <div className="side__user">
                    <div className="side__user--show">
                        <p className="side__user-name">Hello, {userName}</p>
                        <div>
                            <img className="side__user-down" src={!this.state.open ? down : up} onClick={this.openHandle} alt="dropdown button"/>
                        </div> 
                    </div>
                    
                    
                    {this.state.open &&
                        <div className="side__user-detail">
                            <img className="side__user-image" src={userImage} alt="user profile"/>
                            <p>{userName}</p>
                            <p>{userEmail}</p>
                            <button className="side__user-btn" onClick={signout} >sign out</button>
                        </div>
                    }

                </div>
    
                <nav className="side__nav">
                    <NavLink className="side__link" exact to="/">home</NavLink>
                    {/* <NavLink className="side__link" exact to="/about">about</NavLink> */}
                    <NavLink className="side__link" exact to="/product">search</NavLink>
                    <NavLink className="side__link" exact to="/brands">brands</NavLink>
                    <NavLink className="side__link" exact to="/log">#stylelog</NavLink>
    
                </nav>
    
                {/* <div className="chatmodal">
                    <ChatModal />
                </div> */}
    
            </div>
        )
    }

}

export default Header;