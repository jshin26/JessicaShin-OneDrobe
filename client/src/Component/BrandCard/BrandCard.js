import React from 'react';
import { Link } from 'react-router-dom';
import './BrandCard.scss';

import warning from '../../Asset/warning.svg';
import deliveryIcon from '../../Asset/delivery.svg';

const BrandCard = (props) => {

    let {brandLinks, brandName, brandLogo, delivery, newIn} = props;
    return (
        <Link className="brandcard" to={brandLinks}>

            <div className="brandcard__logo">
                <p className="brandcard__name">{brandName}</p>
                <img className="brandcard__img" src={brandLogo} alt={brandName}/>
            </div>

            <div className="brandcard__detail">
                <div className="brandcard__detail-box">
                    <img className="brandcard__detail-icon" src={deliveryIcon} alt="delivery"/>
                    <p className="brandcard__detail-text">{delivery}</p>
                </div>
                <div className={`brandcard__detail-box ${newIn? "newIn" : ""}`}>
                    <img className="brandcard__detail-icon" src={newIn ? warning : ""} alt="" />
                    <p className="brandcard__detail-text">{newIn ? "New In" : ""}</p>
                </div>
            </div>

        </Link>
    )
}

export default BrandCard;