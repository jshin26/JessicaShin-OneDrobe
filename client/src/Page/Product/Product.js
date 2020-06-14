import React from 'react';
import axios from 'axios';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './Product.scss';

import SubHeader from '../../Component/SubHeader/SubHeader';
import Outer from '../../Component/Category/Outer/Outer';
import Top from '../../Component/Category/Top/Top';
import Pants from '../../Component/Category/Pants/Pants';
import Skirt from '../../Component/Category/Skirts/Skirts';
import Dress from '../../Component/Category/Dress/Dress';
import Shoes from '../../Component/Category/Shoes/Shoes';
import Bag from '../../Component/Category/Bag/Bag';
import ProductDetail from '../../Component/ProductDetail/ProductDetail';
import {ProductCardComp } from '../../Component/ProductCard/ProductCard';
import Favourite from '../Favourite/Favourite'

const API_URL="http://localhost:8080";

// Product

class Product extends React.Component {

    state= {
        productData: [],
        search: ""
    }

    updateSearch = (event) => {
        this.setState({search: event.target.value})
    }
    
    componentDidMount () {
        axios
            .get(API_URL)
            .then(response => {                
                this.setState({
                    productData: response.data
                })
            })            
            .catch(err => {
                console.log(err)
            })
    }

    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }


    render() {

        let productInfo = this.state.productData.filter((res) => {            
            if (this.state.search === "") {
                return this.state.productData
            } else if (
                    res.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                ||  res.categories.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                ||  res.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            ) {
                return res
            }
        })
        this.shuffleArray(productInfo);
        
        return (
            <BrowserRouter>
                <div className="search">
                    <SubHeader 
                        updateSearch={this.updateSearch}
                        search={this.state.search}
                    />
                    <div className="main">
                        <Switch>
                            <Route path="/product/" exact>
                                <div key={productInfo.id} id="search">
                                    {productInfo.map(content=>{
                                        return <ProductCardComp 
                                        key={content.id}
                                        name={content.name}
                                        image={content.images[0]}
                                        brandlogo={content.brandlogo}
                                        original={content.original}
                                        price={content.price}
                                        cardlinks={`/${content.id}`}                    
                                    />
                                    })}
                                </div>
                            </Route>
                            <Route path="/favourites" exact component={Favourite} />
                            <Route path="/product/outer" exact component={Outer} />
                            <Route path="/product/top" exact component={Top} />
                            <Route path="/product/pants" exact component={Pants} />
                            <Route path="/product/skirt" exact component={Skirt} />
                            <Route path="/product/dress" exact component={Dress} />
                            <Route path="/product/shoes" exact component={Shoes} />
                            <Route path="/product/bag" exact component={Bag} />
                            <Route path="/:id" exact component={ProductDetail} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Product;