import React from 'react';
import { Link } from 'react-router-dom';
import './BrandCard.scss';

import warning from '../../Asset/warning.svg';
import deliveryIcon from '../../Asset/delivery.svg';

const BrandCard = (props) => {

    let {brandLinks, brandName, brandLogo, delivery, newIn} = props;
    return (
        <Link className="brandcard" to={brandLinks}>

            <p className="brandcard__name">{brandName}</p>
            <img className="brandcard__logo" src={brandLogo} alt={brandName}/>

            <div className="brandcard__detail">
                <div className="brandcard__detail-box">
                    <img className="brandcard__detail-icon" src={deliveryIcon} alt="delivery"/>
                    <p className="brandcard__detail-text">{delivery}</p>
                </div>
                <div className="brandcard__detail-box">
                    <img className="brandcard__detail-icon" src={newIn ? warning : ""} alt="" />
                    <p className="brandcard__detail-text">{newIn ? "New In" : ""}</p>
                </div>
            </div>

        </Link>
    )
}

export default BrandCard;