import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectProducts } from '../features/productsReducer';

const ViewCard = props => {
    const { type, rarity } = useParams();
    const dispatch = useDispatch();
    const products = type ? useSelector(selectProducts).filter(card => card.tags.some(tag => tag.type === type)) :
                    rarity ? useSelector(selectProducts).filter(card => card.rarity === rarity) : useSelector(selectProducts);

    useEffect(() => {
        dispatch(getProducts());
        // console.log('weve dispatched our getALLProducts');
    }, [type, dispatch]);

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