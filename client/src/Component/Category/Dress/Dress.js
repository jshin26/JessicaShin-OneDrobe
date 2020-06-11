import React from 'react';
import axios from 'axios';
import ProductCard from '../../ProductCard/ProductCard';

const API_URL="http://localhost:8080/"

// Dress

class Dress extends React.Component {

    state={
        productData: []
    }

    componentDidMount () {
        axios
            .get(API_URL)
            .then(response => {
                // console.log(response);
                this.setState({
                    productData: response.data
                })
            })
    }

    render() {
        return(
            <div>
                <ProductCard 
                    cardList={this.state.productData.filter(content => content.menugroup === "dress")}                    
                />
            </div>
        )
    }
}

export default Dress;