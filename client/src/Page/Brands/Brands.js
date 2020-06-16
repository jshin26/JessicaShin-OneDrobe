import React from 'react';
import axios from 'axios';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './Brands.scss';

const API_URL="http://localhost:8080";

// Brands

class Brands extends React.Component {

    state= {
        brandData: [],
        search: ""
    }

    updateSearch = (event) => {
        this.setState({search: event.target.value})
    }
    
    componentDidMount () {
        axios
            .get(`${API_URL}/brand/brand`)
            .then(response => {                
                this.setState({
                    brandData: response.data
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

        // let productInfo = this.state.productData.filter((res) => {            
        //     if (this.state.search === "") {
        //         return this.state.productData
        //     } else if (
        //             res.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        //         ||  res.categories.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        //         ||  res.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        //     ) {
        //         return res
        //     }
        // })
        // this.shuffleArray(productInfo);
        
        return (
            <BrowserRouter>
                
            </BrowserRouter>
        )
    }
}

export default Brands;