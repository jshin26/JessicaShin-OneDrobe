import React from 'react';
import axios from 'axios';
import ProductCard from '../../ProductCard/ProductCard';

const API_URL="http://localhost:8080/"

// Outer

class Outer extends React.Component {

    state={
        productData: [],
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
    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    filterHandler = (array) => {
        for (let i=0; i<array.length; i++) {

        }
    }

    render() {

        let filtered = this.state.productData.filter(content => content.menugroup === "outer")
        this.shuffleArray(filtered)
        return(
            <div>

                <div className="main__filter-box">
                    <button className="main__filter-btn" onClick={this.filterHandler}>filter</button>
                </div>
                <ProductCard 
                    cardList={filtered}
                />
            </div>
        )
    }
}

export default Outer;
