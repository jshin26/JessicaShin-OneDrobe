import React from 'react';
import ReactModal from 'react-modal';
import ImageUploader from 'react-images-upload';
import './StyleLogPostModal.scss';

import plus from '../../Asset/plus.svg';

class StyleLogPostModal extends React.Component {
    state= {
        showModal: false,
        open: false
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

    openProduct = () =>{
        const open = this.state.open;
        this.setState({
            open: !open
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
                            <div className="log-modal__form-box">
                                <label className="log-modal__label">caption</label>
                                <textarea className="log-modal__textarea" name="title" placeholder="write captions..."></textarea>
                            </div>
                            
                            <p className="log-modal__product" onClick={this.openProduct}>click to add products in the image</p>
                            {this.state.open &&
                                <div>

                                    <div className="log-modal__form-productbox">
                                        <label className="log-modal__product-label">outer</label>
                                        <input className="log-modal__product-input" name="outer" placeholder="product name"></input>
                                        <input className="log-modal__product-input" name="outerlink" placeholder="product link"></input>
                                    </div>
                                    <div className="log-modal__form-productbox">
                                        <label className="log-modal__product-label">top</label>
                                        <input className="log-modal__product-input" name="top" placeholder="product name"></input>
                                        <input className="log-modal__product-input" name="toplink" placeholder="product link"></input>
                                    </div>
                                    <div className="log-modal__form-productbox">
                                        <label className="log-modal__product-label">pants</label>
                                        <input className="log-modal__product-input" name="pants" placeholder="product name"></input>
                                        <input className="log-modal__product-input" name="pantslink" placeholder="product link"></input>
                                    </div>
                                    <div className="log-modal__form-productbox">
                                        <label className="log-modal__product-label">dress</label>
                                        <input className="log-modal__product-input" name="dress" placeholder="product name"></input>
                                        <input className="log-modal__product-input" name="dresslink" placeholder="product link"></input>
                                    </div>
                                    <div className="log-modal__form-productbox">
                                        <label className="log-modal__product-label">skirt</label>
                                        <input className="log-modal__product-input" name="skirt" placeholder="product name"></input>
                                        <input className="log-modal__product-input" name="skirtlink" placeholder="product link"></input>
                                    </div>
                                    <div className="log-modal__form-productbox">
                                        <label className="log-modal__product-label">shoes</label>
                                        <input className="log-modal__product-input" name="shoes" placeholder="product name"></input>
                                        <input className="log-modal__product-input" name="shoeslink" placeholder="product link"></input>
                                    </div>
                                    <div className="log-modal__form-productbox">
                                        <label className="log-modal__product-label">bag</label>
                                        <input className="log-modal__product-input" name="bag" placeholder="product name"></input>
                                        <input className="log-modal__product-input" name="baglink" placeholder="product link"></input>
                                    </div>

                                </div>
                            }
    
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