import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './Product.scss';

import SubHeader from '../../Component/SubHeader/SubHeader';
import MainSearch from '../../Component/Category/MainSearch/MainSearch';
import Outer from '../../Component/Category/Outer/Outer';
import Top from '../../Component/Category/Top/Top';
import Pants from '../../Component/Category/Pants/Pants';
import Skirt from '../../Component/Category/Skirts/Skirts';
import Dress from '../../Component/Category/Dress/Dress';
import Shoes from '../../Component/Category/Shoes/Shoes';
import Bag from '../../Component/Category/Bag/Bag';

// Product

const Product = () => {
    return (
        <BrowserRouter>
            <div className="search">
                <SubHeader />
                <div className="main">
                    <Switch>
                        <Route path="/product/" exact component={MainSearch} />
                        <Route path="/product/outer" exact component={Outer} />
                        <Route path="/product/top" exact component={Top} />
                        <Route path="/product/pants" exact component={Pants} />
                        <Route path="/product/skirt" exact component={Skirt} />
                        <Route path="/product/dress" exact component={Dress} />
                        <Route path="/product/shoes" exact component={Shoes} />
                        <Route path="/product/bag" exact component={Bag} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Product;