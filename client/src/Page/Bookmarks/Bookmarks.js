import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Bookmarks.scss';

import close from '../../Asset/close.png';
import warning from '../../Asset/warning.svg';
import deliveryIcon from '../../Asset/delivery.svg';
import saleIcon from '../../Asset/sale.svg';

const API_URL="http://localhost:8080";


// Favourite

const BrandCard = (props) => {

    let {brandLinks, brandName, brandLogo, delivery, newIn, deleteHandler, id, onSale} = props;
    return (
        <div className="bookmark">

        <button className="fav__btn" onClick={(event) => deleteHandler(event, id)} value={id}>
            <img src={close} alt="delete from bookmark"/>
        </button>
        <Link className="bookmark-card" to={brandLinks}>

            <div className="brandcard__logo">
                <p className="brandcard__name">{brandName}</p>
                <img className="brandcard__img" src={brandLogo} alt={brandName}/>
            </div>

            <div className="brandcard__detail">
                <div className="brandcard__detail-box">
                    <img className="brandcard__detail-icon" src={deliveryIcon} alt="delivery"/>
                    <p className="brandcard__detail-text">{delivery}</p>
                </div>
                <div className={`brandcard__detail-box ${newIn? "newIn" : "displaynone"}`}>
                    <img className="brandcard__detail-icon" src={newIn ? warning : ""} alt="" />
                    <p className="brandcard__detail-text">{newIn ? "New In" : ""}</p>
                </div>
                <div className={`brandcard__detail-box ${onSale? "onSale" : "displaynone"}`}>
                    <img className="brandcard__detail-icon" src={onSale ? saleIcon : ""} alt="" />
                    <p className="brandcard__detail-text">{onSale ? "on Sale" : ""}</p>
                </div>
            </div>

        </Link>
        </div>
    )
}

class Favourite extends React.Component {

    state={
        bookmark: []
    }

    componentDidMount () {
        axios
            .get(`${API_URL}/bookmarks/bookmark`)
            .then(response => {
                console.log(response)              
                this.setState({
                    bookmark: response.data
                })
            })            
            .catch(err => {
                console.log(err)
            })
    }

    deleteHandler = (e, productID) =>{
        // e.preventDefault();
        console.log('working?', e,productID)
        axios.delete(`${API_URL}/bookmarks/bookmark/${productID}`,)
       
        .then(() => {
            axios
                .get(`${API_URL}/bookmarks/bookmark`)
                .then(response => {                
                    this.setState({
                        bookmark: response.data
                    })
                })            
                .catch(err => {
                    console.log(err)
                })
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    render() {
        return (
            <section className="bookmark-main">

            {this.state.bookmark.map((content) =>{
                return <BrandCard 
                    id={content.id}
                    key={content.id}
                    brandLinks={`/brand/${content.id}`}
                    brandName={content.brand}
                    brandLogo={content.brandlogo}  
                    delivery={content.delivery}
                    newIn={content.newIn}  
                    deleteHandler={this.deleteHandler}
                    onSale={content.onSale}
                />
            })}

        </section>
        )
      }
}

export default Favourite;