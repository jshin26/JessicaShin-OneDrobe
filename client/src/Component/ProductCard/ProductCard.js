import React from 'react';
import './ProductCard.scss';
import {Link} from 'react-router-dom';

// Product Card

export const ProductCardComp = (props) => {

    let { cardlinks, brandlogo, image, name, original, price, addToFav } = props;

    return (

        // <div>
            <Link className="card" to={cardlinks}>
    
                <div className="card--top">
                    <img className="card__brand" src={brandlogo} alt={brandlogo}/>
                    {/* <div className="card__like" onClick={addToFav}>0</div> */}
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
            //<button onClick={addToFav}>add to fav</button>
        // </div>

    )
}

const ProductCard = (props) => {
    let { cardList, addToFav } = props;

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

export default ProductCard;

// state = {
//     favorites:[]
// }

// addToFav = (id) => {
//     console.log(id);
//     this.setState({
//     favorites: this.state.favorites.concat(id)
//     });
// }

// render (props) {
//     return(
//         <section className="main">

//             {this.props.cardList.map((content) =>{
//                 return <ProductCardComp 
//                     key={content.id}
//                     name={content.name}
//                     image={content.images[0]}
//                     brandlogo={content.brandlogo}
//                     original={content.original}
//                     price={content.price}
//                     cardlinks={`/${content.id}`}
//                     addToFav={addToFav}
//                 />
//             })}

//         </section>
//     )
// }