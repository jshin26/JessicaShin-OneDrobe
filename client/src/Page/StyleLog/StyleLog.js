import React from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';

import './StyleLog.scss';

const API_URL="http://localhost:8080";

class LogComp extends React.Component {
    state = {
        show: false
    }

    showMore = () => {
        const showmore = this.state.show;
        this.setState({
            show: !showmore
        })
    }

    render () {
        return (
            <section className="log">
                <h4 className="log__title">{this.props.title}</h4>

                <img className="log__image" src={this.props.image}/>

                <div className="log__detail">
                    <p className="log__author">author: {this.props.author}</p>
                    <p className="log__date">date: {this.props.date}</p>                    
                </div>

                <button className="log__read-btn" onClick={this.showMore}>{!this.state.show ? "open to read": "close"}</button>

                <div className="log__read">
                    <p className="modal__read-desc">
                        {this.state.show && this.props.description}
                    </p>
                </div>
                
            </section>
        )
    }
}

class StyleLog extends React.Component {
    state={
        logs: [],
        showModal: false
    }

    componentDidMount () {
        axios
            .get(`${API_URL}/log/log`)
            .then(response => {          
                this.setState({
                    logs: response.data
                })
            })            
            .catch(err => {
                console.log(err)
            })
    }

    handleOpenModal = () => {
        this.setState({
            showModal: true
        })
    }
    handleCloseModal = () => {
        this.setState({
            showModal: false
        })
    }

    render () {
        return (
            <main className="stylelog">
                <div className="stylelog--inner">

                    {this.state.logs.map((content) =>{
                        return <LogComp 
                            key={content.id}
                            // id={content.id}
                            title={content.title}
                            image={content.image}
                            date={content.date}
                            author={content.author}
                            description={content.description}
                        />
                    })}

                    <button onClick={this.handleOpenModal} >
                        <p>add post</p>
                    </button>

                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleCloseModal}
                        // className="modal"
                        // overlayClassName="overlay"
                    >
                        <h2></h2>
                        <form>
                            <input type="text" name=""></input>
                            
                        </form>

                    </ReactModal>

                </div>
                
            </main>
        )
    }
}

export default StyleLog;