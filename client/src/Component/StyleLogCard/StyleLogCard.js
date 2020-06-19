import React from 'react';
import ReactModal from 'react-modal';
import './StyleLogCard.scss';
import StyleLogDetail from '../StyleLogDetail/StyleLogDetail';

import like from '../../Asset/like.svg';
import comment from '../../Asset/comment.svg';

export function updateTime (unix) {
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

        let {id, title, image, userImage, author, date, likes, likeHandle, outer, outerlink, top, toplink, pants, pantslink, dress, dresslink, skirt, skirtlink, shoes, shoeslink, bag, baglink} = this.props;

        return (
            <React.Fragment>
                <section className="log">

                    <img className="log__image"  onClick={this.handleOpenModal} src={image} alt={title}/>

                    <div className="log__detail">

                        <div className="log__detail--left">
                            <img className="log__user-image" src={userImage} alt={author}/>
                        </div>
                        
                        <div className="log__detail--right">

                            <div className="log__user">
                                <p className="log__user-name">{author}</p>
                            
                                <p className="log__date">{updateTime(date)}</p>
                            </div>

                            <p className="log__title">{title}</p>

                            <div className="log__number">
                                <div className="log__number-box" onClick={(event) => likeHandle(event, id)} >
                                    <img className="log__number-icon" src={like} alt="likes"/>
                                    <p className="log__number-text">{likes.toLocaleString()}</p>
                                </div>
                                <div className="log__number-box">
                                    <img className="log__number-icon" src={comment} alt="comments"/>
                                    <p className="log__number-text">0</p>
                                </div>
                            </div>                            
                        </div>
                    </div>

                </section>

                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="log-detail-modal"
                    overlayClassName="overlay"
                    ariaHideApp={false}
                >
                    <StyleLogDetail
                        id={id}
                        image={image}
                        title={title}
                        userImage={userImage}
                        author={author}
                        date={date}
                        likes={likes}
                        likeHandle={likeHandle}
                        outer={outer}
                        outerlink={outerlink}
                        top={top}
                        toplink={toplink}
                        pants={pants}
                        pantslink={pantslink}
                        dress={dress}
                        dresslink={dresslink}
                        skirt={skirt}
                        skirtlink={skirtlink}
                        shoes={shoes}
                        shoeslink={shoeslink}
                        bag={bag}
                        baglink={baglink}
                        likeHandle={likeHandle}
                    />
                </ReactModal>
            </React.Fragment>
        )
    }
}

export default StyleLogCard;