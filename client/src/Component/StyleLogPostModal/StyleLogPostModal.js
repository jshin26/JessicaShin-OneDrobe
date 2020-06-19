import React from 'react';
import ReactModal from 'react-modal';
import ImageUploader from 'react-images-upload';
import './StyleLogPostModal.scss';

import plus from '../../Asset/plus.svg';

class StyleLogPostModal extends React.Component {
    state= {
        showModal: false,
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

        let {postNewlog} = this.props
        return (
            <React.Fragment>
                <button className="stylelog__btn" onClick={this.handleOpenModal} >
                    <img className="stylelog__icon" src={plus} alt="post"/>
                </button>
    
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="log-modal"
                    overlayClassName="log-overlay"
                    ariaHideApp={false}
                >
                    <div className="log-modal--inner">
                        
                        <form className="log-modal__form" onSubmit={postNewlog}>
                            {/* <div className="log-modal__form-box">
                                <label className="log-modal__label">title</label>
                                <input className="log-modal__input" type="text" name="title" placeholder="please type title"></input>
                            </div> */}
                            <div className="log-modal__form-box">
                                <label className="log-modal__label">description</label>
                                <textarea className="log-modal__textarea" name="title" placeholder="please type description"></textarea>
                            </div>
    
                            <ImageUploader 
                                withIcon={true}
                                buttonText='Choose images'
                                imgExtension={['.jpg', '.png', 'gif']}
                                maxFileSize={5242880}                                
                                className="log-modal__upload"
                                name="image"
                            />
                            <div className="log-modal__btnbox">
                                <button className="log-modal__btn btn btn--white" onClick={this.handleCloseModal}>cancel</button>
                                <button className="log-modal__btn btn" type="submit">submit</button>
                            </div>
                        </form>
                    </div>
    
                </ReactModal>
            </React.Fragment>
        )
    }
}

export default StyleLogPostModal;