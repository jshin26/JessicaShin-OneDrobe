import React from 'react';
import axios from 'axios';
import './StyleLogDetail.scss';

import like from '../../Asset/like.svg';
import comment from '../../Asset/comment.svg';

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

const CommentComp = (props) =>{
    let { commentImage, commentName, timestamp, comment } = props;

    return (
        <section className="comment">
            <div className="comment--inner">
                <div className="comment__box">
    
                    <div className="comment--left">
                        <img src={commentImage} alt={commentName}/>
                    </div>
    
                    <div className="comment--right">
    
                        <div className="comment__info">
                            <p className="comment__name">{commentName}</p>
                            {/* <p className="comment__date">{updateTime(timestamp)}</p> */}
                        </div>
    
                        <div>
                            <p className="comment__comments">{comment}</p>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </section>
    )
}

class StyleLogDetail extends React.Component {
    
    state = {
        log: []
    }

    componentDidMount () {
        // console.log(this.props)
        axios
            .get(`${API_URL}/log/log/`)
            .then(response => {   
                console.log(response)       
                this.setState({
                    log: response.data
                })
            })            
            .catch(err => {
                console.log(err)
            })
    }

    render () {

        let { id, logimage, title, userImage, author, date, likes, comments, description} = this.props;
        return (
            <article>
    
                {/* <img src={logimage} alt={title}/> */}
    
                <div>
    
                    {/* <img src={userImage} alt={author}/> */}
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
                            {/* <img src={like} alt="likes"/> */}
                            <p >{likes}</p>
                        </div>
                        <div >
                            {/* <img src={comment} alt="comments"/> */}
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
                </div>
            </article>
        )
    }
}

export default StyleLogDetail;