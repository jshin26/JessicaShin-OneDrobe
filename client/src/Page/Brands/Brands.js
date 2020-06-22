import React from 'react';
import axios from 'axios';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './Brands.scss';

import BrandHeader from '../../Component/BrandHeader/BrandHeader';
import BrandCard from '../../Component/BrandCard/BrandCard';
import BrandDetail from '../../Component/BrandDetail/BrandDetail';
import Bookmarks from '../Bookmarks/Bookmarks'

const API_URL="http://localhost:8080";
// const API_URL="";

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

        let brandInfo = this.state.brandData.filter(res => {            
            if (this.state.search === "") {
                return this.state.brandData
            } else if (
                    res.brand.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                || res.category.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            ) {
                return res
            }
        })
        this.shuffleArray(brandInfo);
        
        return (
            <BrowserRouter>
                <div className="brand">
                    <BrandHeader 
                        updateSearch={this.updateSearch}
                        search={this.state.search}
                    />
                   
                    <div key={this.state.brandData.id} id="brand-body">
                        <p className="brand__warning">please reminder that 'brand'page is optimized best in desktop view</p>
                        {/* <Route path="/brands/" exact> */}
                                <div className="brand__main">
                                    {brandInfo.map(content=>{
                                        return <BrandCard 
                                        key={content.id}
                                        brandLinks={`/brand/${content.id}`}
                                        brandName={content.brand}
                                        brandLogo={content.brandlogo}  
                                        delivery={content.delivery}
                                        newIn={content.newIn}
                                        onSale={content.onSale}
                                    />
                                    })}
                                </div>
                            {/* </Route> */}
                            
                        <Switch>
                            <div className="brand__route">
                                <Route path="/bookmarks" exact component={Bookmarks} />
                                <Route path="/brand/:id" component={BrandDetail}/>
                            </div>
                        </Switch>
                    </div>
                </div>               
                
            </BrowserRouter>
        )
    }
}

export default Brands;