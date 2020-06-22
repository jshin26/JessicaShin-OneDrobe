import React from 'react';
import ReactModal from 'react-modal';

import './ChatModal.scss';
import chat from '../../Asset/chat.svg';
import Chatbot from '../Chatbot/Chatbot';

class ChatModal extends React.Component {
    state = {
        showChatbot: false
    }

    handleOpenChatbot = () => {
        this.setState({
            showChatbot: true
        })
    }
    handleCloseChatbot = () => {
        this.setState({
            showChatbot: false
        })
    }

    // componentDidMount() {
    //     document.addEventListener("click", this.closeChatBotHandle);
    // }
    // componentWillUnmount() {
    //     document.removeEventListener("click", this.closeChatBotHandle);
    // }
    // closeChatBotHandle = (e) => {
    //     if (e.target.classList[0] !== "modal__bgr-btn") {
    //         this.setState({
    //             showChatbot: false
    //         })
    //     }
    // }

    render () {
        return (
            <div className="modal-ctn">
                <button className="modal__btn" onClick={this.handleOpenChatbot} >
                    <p>need help?</p>
                    <img src={chat} alt="chat icon" />
                </button>

                <ReactModal
                    isOpen={this.state.showChatbot}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseChatbot}
                    className="modal"
                    overlayClassName="overlay"
                >

                    <div className="modal__bgr">
                        <Chatbot />
                    
                        <div className="modal__bgr-btn">
                            <button onClick={this.handleCloseChatbot}>Close</button>
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default ChatModal;