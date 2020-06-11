import React from 'react';
import axios from 'axios';
import ProductCard from '../../ProductCard/ProductCard';

const API_URL="http://localhost:8080/"

// Skirts

class Skirt extends React.Component {

    state={
        productData: []
    }

    componentDidMount () {
        axios
            .get(API_URL)
            .then(response => {
                
                this.setState({
                    productData: response.data
                })
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

        let filtered = this.state.productData.filter(content => content.menugroup === "skirt")
        this.shuffleArray(filtered)
        return(
            <div>
                <ProductCard 
                    cardList={filtered}
                />
            </div>
        )
    }
}

export default Skirt;
