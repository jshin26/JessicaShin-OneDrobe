import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Favourite.scss';

const API_URL="http://localhost:8080";


// Favourite

const ProductCardComp = (props) => {

    let { cardlinks, brandlogo, image, name, original, price, deleteHandler, id } = props;

    return (

        <div className="card">
            <button onClick={(event) => deleteHandler(event, id)} value={id}>delete</button>
            <Link  to={cardlinks}>
    
                <div className="card--top">
                    <img className="card__brand" src={brandlogo} alt={brandlogo}/>
                    
                </div>
                
                <img className="card__img" src={image} alt={name}/>
                
                <div className="card__detail">
                    <p className="card__name">{name}</p>
                    <div className="card__pricebox">
                        <p className="card__original">{original}</p>
                        <p className="card__price">$ {price}</p>
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