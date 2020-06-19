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

const StyleLogDetail = (props) => {
 
    let {title, image, userImage, author, date, likes, outer, outerlink, top, toplink, pants, pantslink, dress, dresslink, skirt, skirtlink, shoes, shoeslink, bag, baglink} = props;

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

            </div>

        </article>
    )

}

export default StyleLogDetail;