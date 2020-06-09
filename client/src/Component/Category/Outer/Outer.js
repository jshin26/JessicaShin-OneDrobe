import React from 'react';
import axios from 'axios';
import './Outer.scss';
import ProductCard from '../../ProductCard/ProductCard';

const API_URL="http://localhost:8080/"

// Outer

class Outer extends React.Component {

    state={
        productData: []
    }

    componentDidMount () {
        axios
            .get(API_URL)
            .then(response => {
                console.log(response);
                this.setState({
                    productData: response.data
                })
            })
    }

    render() {
        return(
            <div>
                <ProductCard 
                    cardList={this.state.productData}                    
                />
            </div>
        )
    }
}

export default Outer;

// .filter(content => content.menugroup === "outer")