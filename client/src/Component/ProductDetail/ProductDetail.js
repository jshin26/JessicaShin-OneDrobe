import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './ProductDetail.scss';

import backIcon from '../../Asset/back-arrow.svg';
import dotIcon from '../../Asset/dot.svg';

const API_URL="http://localhost:8080";

class ProductDetail extends React.Component {
    
    state = {
        productData: [],
        changeimage: [],
        images: [],
    }

    fetchProductData = (url) => {
        axios
            .get(url)
            .then(response => {                
                this.setState({
                    productData: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount () {
        this.fetchProductData(`${API_URL}/${this.props.match.params.id}`);
        axios
            .get(`${API_URL}/${this.props.match.params.id}`)
            .then(response => {                
                this.setState({
                    images: response.data.images[0]
                })
            })            
            .catch(err => {
                console.log(err)
            })
        axios
            .get(`${API_URL}/${this.props.match.params.id}`)
            .then(response => {             
                this.setState({
                    changeimage: response.data.images
                })
            })            
            .catch(err => {
                console.log(err)
            })
    }
    
    slideImageOne = (e) => {
        e.preventDefault();
        this.setState({
            images: this.state.changeimage[0]
        })
    } 
    slideImageTwo = (e) => {
        e.preventDefault();
        this.setState({
            images: this.state.changeimage[1]
        })
    } 
    slideImageThree = (e) => {
        e.preventDefault();
        this.setState({
            images: this.state.changeimage[2]
        })
    } 
    slideImageFour = (e) => {
        e.preventDefault();
        this.setState({
            images: this.state.changeimage[3]
        })
    } 

    favHandle = (e) => {
        e.preventDefault();
        axios
            .post(`${API_URL}/favourites/fav`, {
                "id" : this.state.productData.id,
                "name" : this.state.productData.name,
                "brand": this.state.productData.brand,
                "brandlogo" : this.state.productData.brandlogo,
                "brandpage" : this.state.productData.brandpage,                
                "original" : this.state.productData.original,
                "price" : this.state.productData.price,
                "description" : this.state.productData.description,
                "page" : this.state.productData.page,
                "categories" : this.state.productData.categories,
                "images" : this.state.productData.images,
                "menugroup": this.state.productData.menugroup
            })
    }

    render() {
        return (

            <section className="detail">

            
                <Link to="/product" className="detail__link">
                    <img className="detail__link-img" src={backIcon} alt="backicon"/>
                    <p className="detail__link-back">See all products..</p>
                </Link>
                

                <div className="detail__main">
                    <div className="detail__img">
                        <div className="detail__dots">
                            <img className="detail__dot" onClick={this.slideImageOne} src={dotIcon} alt="next"/>
                            <img className="detail__dot" onClick={this.slideImageTwo} src={dotIcon} alt="next"/>
                            <img className="detail__dot" onClick={this.slideImageThree} src={dotIcon} alt="next"/>
                            <img className="detail__dot" onClick={this.slideImageFour} src={dotIcon} alt="next"/>
                        </div>
                        <img className="detail__img-img" src={this.state.images} alt="details"/>
                        {/* <img className="detail__img-icon" src={nextIcon} alt="next arrow" onClick={this.slideImage}/> */}
                    </div>
        
                    <div className="detail__detail">                        
                        <div className="detail__detail--flex">
                            <h2 className="detail__name">{this.state.productData.name}</h2>
                            
                        </div>
                        <p className="detail__description">{this.state.productData.description}</p>
                        <p className="detail__price">$ {this.state.productData.price}</p>
                        
                        <a className="detail__brand-a" href={this.state.productData.page} target="_blank" rel="noopener noreferrer">
                            <img className="detail__brand-logo" src={this.state.productData.brandlogo} alt={this.state.productData.brand}/>
                            {/* <p>(you can view product detail in {this.state.productData.brand} site by clicking logo)</p> */}
                        </a>

                        <button className="detail__fav btn" onClick={this.favHandle}>
                            <p className="detail__fav-text">add to fav</p>
                        </button>
                    </div>
                </div>

            </section>
        )
    }
}

export default ProductDetail;