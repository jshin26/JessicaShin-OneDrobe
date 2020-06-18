import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './BrandDetail.scss';
import Switch from 'react-switch';

import ProductCard from '../ProductCard/ProductCard';

import warning from '../../Asset/warning.svg';
import deliveryIcon from '../../Asset/delivery.svg';
import saleIcon from '../../Asset/sale.svg';
import instagramI from '../../Asset/instagram.svg';
import facebookI from '../../Asset/facebook.svg';
import twitterI from '../../Asset/twitter.svg';

const API_URL="http://localhost:8080";

class BrandDetail extends React.Component {
    
    state = {
        brandData: {
            currBrand: [],
            productById: []
        },
        checked: false,
    }

    fetchBrandData = (url) => {
        axios
            .get(url)
            .then(response => {                
                this.setState({
                    brandData: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount () {
        console.log(this.props)
        this.fetchBrandData(`${API_URL}/brand/brand/${this.props.match.params.id}`);
    }

    markHandle = (e, productID) => {
        const check = this.state.checked;
        this.setState({checked: !check});

        if (e === true) {
            axios
                .post(`${API_URL}/bookmarks/bookmark`, {
                    "id" : this.state.brandData.currBrand.id,
                    "brand": this.state.brandData.currBrand.brand,
                    "brandlogo" : this.state.brandData.currBrand.brandlogo,
                    "brandpage" : this.state.brandData.currBrand.brandpage,                
                    "delivery" : this.state.brandData.currBrand.delivery,
                    "category" : this.state.brandData.currBrand.category,
                    "newIn" : this.state.brandData.currBrand.newIn,
            }) 
        } else if (e === false) {
            axios.delete(`${API_URL}/bookmarks/bookmark/${productID}`,)
       
            .then(() => {
                axios
                    .get(`${API_URL}/bookmarks/bookmark`)
                    .then(response => {                
                        this.setState({
                            favourites: response.data
                        })
                    })            
                    .catch(err => {
                        console.log(err)
                    })
            })
        }
    }

    render() {

        let { brand, brandpage, brandlogo, delivery, newIn, description, cs, instagram, facebook, twitter, id, onSale} = this.state.brandData.currBrand
        return (

            <section className="brand-detail">

                <div className="brand-detail__main">
                   
                    <div className="brand-detail--left">
                        <a className="brand-detail__detail" href={brandpage} target="_blank">
                            <img className="brand-detail__logo" src={brandlogo} alt={brand}/>
                        </a>
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
                    </div>

                    <div className="brand-detail--right">
                        <p className="brand-detail__description">{description}</p>
                        <p className="brand-detail__cs">customer service: {cs}</p>

                        <div className="brand-detail__sns">
                            <a className="brand-detail__link" href={instagram} target="_blank">
                                <img className="brand-detail__icon" src={instagramI} alt="instagram link"/>
                            </a>
                            <a className="brand-detail__link" href={facebook} target="_blank">
                                <img className="brand-detail__icon" src={facebookI} alt="facebook link"/>
                            </a>
                            <a className="brand-detail__link" href={twitter} target="_blank">
                                <img className="brand-detail__icon" src={twitterI} alt="twitter link"/>
                            </a>
                        </div>

                        <div className="brand-detail__bookmark">
                            <p>add to bookmark</p>
                            <Switch                                
                                onChange={(e) => this.markHandle(e, id)}
                                checked={this.state.checked}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                value={this.state.checked ? true : false}
                                name="bookmark"
                                onColor="#ffd64d"
                            />
                        </div>
                    </div>

                </div>

                <ProductCard 
                    cardList = {this.state.brandData.productById}
                />
            </section>
        )
    }
}

export default BrandDetail;