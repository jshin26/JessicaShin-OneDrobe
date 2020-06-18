import React from 'react';
import axios from 'axios';
import './StyleLogDetail.scss';

import {updateTime} from '../StyleLogCard/StyleLogCard';
import like from '../../Asset/like.svg';
import comment from '../../Asset/comment.svg';

const API_URL="http://localhost:8080";

const CommentComp = (props) =>{
    let { commentImage, commentName, time, comment } = props;

    return (
        <section className="comments">

            <div className="comments--left">
                {/* <img className="comments__Image" src={commentImage} alt={commentName}/> */}
            </div>

            <div className="comments-right">
                <p className="comments__name">{commentName}</p>
                <p className="comments__comment">{comment}</p>
                <p className="comments__time">{updateTime(time)}</p>
            </div>


        </section>
    )
}

class StyleLogDetail extends React.Component {
    
    state= {
        log: {},
        selectedLog: {
            logComments: []
        }
    }

    fetchInventoryData = (url) => {
        axios.get(`http://localhost:8080/log/log/${url}`)
        .then(response => {
            console.log(response)
            this.setState({
                log: response.data
            })
        })
        .catch(error => {
            return error
        })
    }

    componentDidMount(){
        console.log(this.state)
        this.fetchInventoryData('');
        axios.get(`http://localhost:8080/log/log/${this.state.log.logId}`)
        .then(response => {
            console.log(response)
            this.setState({
                selectedLog: response.data
            })
        })
        .catch(error => {
            return error
        })
    }
 
    render () {

        let {title, image, userImage, author, date, likes, comments} = this.props;

        return (
            <article className="log-detail">
                
                <div className="log-detail--left">
                    <img className="log-detail__img" src={image} alt={title}/>
                </div>

                <div className="log-detail--right">

                    <div className="log-detail__user">
                        <img className="log-detail__user-img" src={userImage} alt={author} />                    
                        <div className="log-detail__user-info">

                            <p className="log-detail__user-name">{author}</p>
                            <p className="log-detail__user-time">{updateTime(date)}</p>
                            <p className="log-detail__description">{title}</p>

                            <div className="log-detail__number">
                                <div className="log-detail__number-box">
                                    <img className="log-detail__number-icon" src={like} alt="likes"/>
                                    <p className="log-detail__number-text">{likes}</p>
                                </div>
                                <div className="log-detail__number-box">
                                    <img className="log-detail__number-icon" src={comment} alt="comments"/>
                                    {/* <p className="log-detail-text">{comments}</p> */}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                
                {/* {this.state.selectedLog.logComments.map((content) => {
                    return(
                        <CommentComp 
                            key={content.logId}
                            commentName={content.commentName}
                            comment={content.comment}
                        />
                    )
                })} */}
                
            </article>
        )
    }
}

export default StyleLogDetail;


{/* <img src={logimage} alt={title}/>

<div>

    <img src={userImage} alt={author}/>
</div>

<div>                        

    <div >
        <p>{author}</p>
    
        <p>{updateTime(date)}</p>
    </div>

    <p >{title}</p>


    <p>{description}</p>

    <div >
        <div>
            <img src={like} alt="likes"/>
            <p >{likes}</p>
        </div>
        <div >
            <img src={comment} alt="comments"/>
            <p >{comments}</p>
        </div>
    </div>

    <form>
                
        <label>comment</label>
        <input type="text" name="comment" placeholder="leave a comment"></input>

    </form>

    <div>

        {this.state.log.map((content) => {
            return (
                <CommentComp
                    commentImage={content.comments.commentImage}
                    commentName={content.comments.commentName}
                    timestamp={content.comments.timestamp}
                    comment={content.comments.comment}
                />
            )
        })}

    </div>
</div> */}