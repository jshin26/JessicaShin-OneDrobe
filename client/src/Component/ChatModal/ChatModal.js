import React from 'react';
import ReactModal from 'react-modal';

import './ChatModal.scss';
import chat from '../../Asset/chat.png';
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
            <>
                <button onClick={this.handleOpenModal} >
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
            </>
        )
    }
}

export default ChatModal;