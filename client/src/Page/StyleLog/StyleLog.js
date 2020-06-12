import React from 'react';
import ReactModal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import ImageUploader from 'react-images-upload';

import mask from '../../Asset/mask.jpg';
import plus from '../../Asset/plus1.svg';

import './StyleLog.scss';

const API_URL="http://localhost:8080";

function updateTime (unix) {
    const getDate = new Date(unix);

    const year = getDate.getFullYear();
    const month = getDate.getMonth();
    const day = getDate.getDate();


    let calSeconds = Math.floor((new Date() - getDate) / 1000);
    let timeAgo = Math.floor(calSeconds / 2592000);
    if (timeAgo > 1) {
    return (month+1) + '/' + day + '/' + year;
    }
    timeAgo = Math.floor(calSeconds / 86400);
    if (timeAgo > 1) {
      return timeAgo + " days ago";
    }
    timeAgo = Math.floor(calSeconds / 3600);
    if (timeAgo > 1) {
      return timeAgo + " hours ago";
    }
    timeAgo = Math.floor(calSeconds / 60);
    if (timeAgo > 1) {
      return timeAgo + " minutes ago";
    }
    return Math.floor(calSeconds) + " seconds ago";

};

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
                    <p className="log__date">date: {updateTime(this.props.date)}</p>
                    <button className="log__read-btn" onClick={this.showMore}>{!this.state.show ? "open to read": "close"}</button>
                </div>                

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
        showModal: false,
        selectedImage: null
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
        axios
            .get(`${API_URL}/log/log`)
            .then(response => {          
                this.setState({
                    selectedImage: response.data.image
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

    onChangeHandler = (e) => {
        console.log(e)
        this.setState({
            selectedImage: e,
            loaded: 0
        })
    }

    postNewlog = (e) =>{
        e.preventDefault();
        if (!e.target.author.value || !e.target.title.value || !e.target.description.value) {
            alert ('please fill in the blanks');
            e.preventDefault();
        } else {
            console.log(this.state.selectedImage);
            const data = new FormData()
            data.append('image', this.state.selectedImage)
            axios
                .post(`${API_URL}/log/log`, {
                    "id": uuidv4(),
                    "author": e.target.author.value,
                    "title" : e.target.title.value,
                    "description" : e.target.description.value,
                    "date" : Date.now(),
                    "image" : data
                })
                .then(res=> {
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })
                e.target.reset();
        }
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
                    }).reverse()}

                    <button className="stylelog__btn" onClick={this.handleOpenModal} >
                        <img className="stylelog__icon" src={plus} alt="post"/>
                    </button>

                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleCloseModal}
                        className="log-modal"
                        overlayClassName="log-overlay"
                    >
                        <div className="log-modal--inner">
                            <h2 className="log-modal__title">join #stylelog</h2>
                            <form className="log-modal__form" onSubmit={this.postNewlog}>
                                <div className="log-modal__form-box">
                                    <label className="log-modal__label">username</label>
                                    <input className="log-modal__input" type="text" name="author" placeholder="please type username"></input>
                                </div>
                                <div className="log-modal__form-box">
                                    <label className="log-modal__label">title</label>
                                    <input className="log-modal__input" type="text" name="title" placeholder="please type title"></input>
                                </div>
                                <div className="log-modal__form-box">
                                    <label className="log-modal__label">description</label>
                                    <textarea className="log-modal__textarea" name="description" placeholder="please type description"></textarea>
                                </div>
    
                                <ImageUploader 
                                    withIcon={true}
                                    buttonText='Choose images'
                                    onChange={this.onChangeHandler}
                                    imgExtension={['.jpg', '.png', 'gif']}
                                    maxFileSize={5242880}                                
                                    className="log-modal__upload"
                                    name="image"
                                />
                                {/* <input type="file" name="image" onChange={this.onChangeHandler}></input> */}
                                <div className="log-modal__btnbox">
                                    <button className="log-modal__btn btn btn--white" onClick={this.handleCloseModal}>cancel</button>
                                    <button className="log-modal__btn btn" type="submit">submit</button>
                                </div>
                            </form>
                        </div>

                    </ReactModal>

                </div>
                
            </main>
        )
    }
}

export default StyleLog;