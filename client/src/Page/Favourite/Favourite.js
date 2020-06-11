import React from 'react';
import axios from 'axios';
import './Favourite.scss';

// import ProductCard from '../../Component/ProductCard/ProductCard';
import {ProductCardComp} from '../../Component/ProductCard/ProductCard'

const API_URL="http://localhost:8080";


// Favourite

const ProductCard = (props) => {
    let { cardList } = props;

    return(
        <section className="main">

            {cardList.map((content) =>{
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

        </section>
    )
}

class Favourite extends React.Component {

    state={
        favourites: []
    }

    componentDidMount () {
        axios
            .get(`${API_URL}/favourites/fav`)
            .then(response => {                
                this.setState({
                    favourites: response.data
                })
            })            
            .catch(err => {
                console.log(err)
            })
    }
    // componentDidUpdate() {
    //     axios
    //     .get(`${API_URL}/favourites/fav`)
    //     .then(response => {                
    //         this.setState({
    //             favourites: response.data
    //         })
    //     })            
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    render() {
        return (
            <div>
                <ProductCard 
                    cardList={this.state.favourites}                    
                />
            </div>
        )
      }
}

export default Favourite;