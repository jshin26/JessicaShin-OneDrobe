import React from 'react';
import './StyleLogDetail.scss';

import {updateTime} from '../StyleLogCard/StyleLogCard';
import like from '../../Asset/like.svg';
import comment from '../../Asset/comment.svg';
import outerI from '../../Asset/0coat.svg';
import topI from '../../Asset/0top.svg';
import pantsI from '../../Asset/0pants.svg';
import dressI from '../../Asset/0dress.svg';
import skirtI from '../../Asset/0skirt.svg';
import bagI from '../../Asset/0bag.svg';
import shoesI from '../../Asset/0shoes.svg';

const CommentComponent = (props) => {

    let {commentUser, commentImage, commentDate, comment} = props;

    return (

        <section className="comment">

            <div className="comment__box">

                <div className="comment--left">
                    <img className="comment__image" src={commentImage}/>
                </div>

                <div className="comment--right">

                    <div className="comment__info">
                        <p className="comment__name">{commentUser}</p>
                        <p className="comment__date">{updateTime(commentDate)}</p>
                    </div>

                    <div>
                        <p className="comment__comments">{comment}</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

const StyleLogDetail = (props) => {
 
    let {displaycomments, id, likeHandle, title, image, userImage, author, date, likes, outer, outerlink, top, toplink, pants, pantslink, dress, dresslink, skirt, skirtlink, shoes, shoeslink, bag, baglink} = props;

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
                            <div className="log-detail__number-box" onClick={(event) => likeHandle(event, id)}>
                                <img className="log-detail__number-icon" src={like} alt="likes"/>
                                <p className="log-detail__number-text">{likes.toLocaleString()}</p>
                            </div>
                            <div className="log-detail__number-box">
                                <img className="log-detail__number-icon" src={comment} alt="comments"/>
                                {/* <p className="log-detail-text">{comments}</p> */}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="log__products">
                    {/* click icon to view on the brand website! */}
                    <div className={outer? "log__products-box" : "displaynone"}>
                        <a href={outerlink} target="_blank">
                            <img className="log__products-img" src={outerI} alt="outer"/>
                        </a>
                        <p>{outer}</p>
                    </div>
                    <div className={top? "log__products-box" : "displaynone"}>
                        <a target="_blank" href={toplink}>
                            <img className="log__products-img" src={topI} alt="outer"/>
                        </a>
                        <p>{top}</p>
                    </div>
                    <div className={pants? "log__products-box" : "displaynone"}>
                        <a target="_blank" href={pantslink}>
                            <img className="log__products-img" src={pantsI} alt="outer"/>
                        </a>
                        <p>{pants}</p>
                    </div>
                    <div className={skirt? "log__products-box" : "displaynone"}>
                        <a target="_blank" href={skirtlink}>
                            <img className="log__products-img" src={skirtI} alt="outer"/>
                        </a>
                        <p>{skirt}</p>
                    </div>
                    <div className={dress? "log__products-box" : "displaynone"}>
                        <a target="_blank" href={dresslink}>
                            <img className="log__products-img" src={dressI} alt="outer"/>
                        </a>
                        <p>{dress}</p>
                    </div>
                    <div className={shoes? "log__products-box" : "displaynone"}>
                        <a target="_blank" href={shoeslink}>
                            <img className="log__products-img" src={shoesI} alt="outer"/>
                        </a>
                        <p>{shoes}</p>
                    </div>
                    <div className={bag? "log__products-box" : "displaynone"}>
                        <a target="_blank" href={baglink}>
                            <img className="log__products-img" src={bagI} alt="outer"/>
                        </a>
                        <p>{bag}</p>
                    </div>
                </div>

                <div>
                    <form>
                        <input type="text"></input>
                    </form>
                </div>

                <div>
                    {displaycomments.map((content) =>{
                        return (
                            <CommentComponent
                                commentUser={content.commentUser}
                                commentDate={content.commentDate}
                                comment={content.comment}
                                commentImage={content.commentImage}
                            />
                        )
                    })}
                </div>

            </div>

        </article>
    )

}

export default StyleLogDetail;