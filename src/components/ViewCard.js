import React from 'react';
import { Link } from 'react-router-dom';

const ViewCard = props => {
    // component that views a single card but within AllProducts alongside other cards
    // styling and values shown are different than SingleProduct!!!

    return (
        <div className='innerContainer' key={props.card.id}>
            <Link to = {`/products/${props.card.id}`}>
                <img className='productImg' src= {props.card.img}/>
                <h3>{props.card.name}</h3>
            </Link>
            <p>${props.card.price}</p>
            <p>Types: {props.card.tags.map(tag => `${tag.type} `)}</p>
            <h6>Rarity: {props.card.rarity}</h6>
        </div>
    )
}

export default ViewCard;