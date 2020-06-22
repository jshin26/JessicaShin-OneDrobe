import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Favourite.scss';

import close from '../../Asset/close.png';

const API_URL="http://localhost:8080";
// const API_URL="";


// Favourite

const ProductCardComp = (props) => {

    let { cardlinks, brandlogo, image, name, original, price, deleteHandler, id } = props;

    return (

        <div className="fav">
            <button className="fav__btn" onClick={(event) => deleteHandler(event, id)} value={id}>
                <img src={close} alt="delete from fav"/>
            </button>
            <Link  to={cardlinks} className="fav__link">
    
                <div className="fav--top">
                    <img className="fav__brand" src={brandlogo} alt={brandlogo}/>
                    
                </div>
                
                <img className="fav__img" src={image} alt={name}/>
                
                <div className="fav__detail">
                    <p className="fav__name">{name}</p>
                    <div className="fav__pricebox">
                        <p className="fav__original">{original}</p>
                        <p className="fav__price">$ {price}</p>
                    </div>
                </div>
            </Link>
        </div>


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

    deleteHandler = (e, productID) =>{
        // e.preventDefault();
        console.log('working?', e,productID)
        axios.delete(`${API_URL}/favourites/fav/${productID}`,)
       
        .then(() => {
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
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    render() {
        return (
            <section className="main">

            {this.state.favourites.map((content) =>{
                return <ProductCardComp 
                    key={content.id}
                    id={content.id}
                    value={content.id}
                    name={content.name}
                    image={content.images[0]}
                    brandlogo={content.brandlogo}
                    original={content.original}
                    price={content.price}
                    cardlinks={`/${content.id}`}
                    deleteHandler={this.deleteHandler}                   
                />
            })}

        </section>
        )
      }
}

export default Favourite;