import React from 'react';
import ReactModal from 'react-modal';
import './StyleLogCard.scss';
import StyleLogDetail from '../StyleLogDetail/StyleLogDetail';

import like from '../../Asset/like.svg';
import comment from '../../Asset/comment.svg';

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

class StyleLogCard extends React.Component {
    state = {
        show: false
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

        let {title, image, userImage, author, date, description, likes, likeHandle, comments} = this.props;

        return (
            <>
            <section className="log" onClick={this.handleOpenModal}>

                <img className="log__image" src={image} alt={title}/>

                <div className="log__detail">

                    <div>
                        <img className="log__user-image" src={userImage} alt={author}/>
                    </div>
                    
                    <div>

                        <div className="log__user">
                            <p className="log__user-name">{author}</p>
                        
                            <p className="log__date">{updateTime(date)}</p>
                        </div>

                        <p className="log__title">{title}</p>

                        <div className="log__number">
                            <div className="log__number-box">
                                <img className="log__number-icon" src={like} onClick={likeHandle} alt="likes"/>
                                <p className="log__number-text">{likes}</p>
                            </div>
                            <div className="log__number-box">
                                <img className="log__number-icon" src={comment} alt="comments"/>
                                <p className="log__number-text">{comments}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="loggmodal"
                    // overlayClassName="log-overlay"
                >
                    Hi
                    <p>{comments}</p>
                <StyleLogDetail
                    logimage={image}
                    title={title}
                    userImage={userImage}
                    author={author}
                    date={date}
                    likes={likes}
                    comments={comments}
                    description={description}
                />
                </ReactModal>
            </>
        )
    }
}

export default StyleLogCard;