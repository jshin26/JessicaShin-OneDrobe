import React from 'react';
import ReactModal from 'react-modal';

import './ChatModal.scss';
import chat from '../../Asset/chat.svg';
import Chatbot from '../Chatbot/Chatbot';

class ChatModal extends React.Component {
    state = {
        showModal: false
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
            <div className="modal-ctn">
                <button className="modal__btn" onClick={this.handleOpenModal} >
                    <p>need help?</p>
                    <img src={chat} alt="chat icon" />
                </button>

                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="modal"
                    overlayClassName="overlay"
                >

                    <Chatbot />
                    <button onClick={this.handleCloseModal}>Close</button>

                </ReactModal>
            </div>
        )
    }
}

export default ChatModal;