import React from 'react';
import './ProductCard.scss';
import {Link} from 'react-router-dom';

// Product Card

const ProductCardComp = (props) => {

    let { cardlinks, brandlogo, image, name, original, price} = props;

    return (

        <Link className="card" to={cardlinks}>

            <div className="card--top">
                <img className="card__brand" src={brandlogo} alt={brandlogo}/>
                <div className="card__like">0</div>
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

    )
}

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

export default ProductCard;