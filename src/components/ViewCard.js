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
                <h3>product Name: {props.card.name}</h3>
            </Link>
            <h3>product Name: {props.card.name}</h3>
            <img className='productImg' src= {props.card.img}/>
            <p>Types: {props.card.tags.map(tag => `${tag.type}`)}</p>
            <p>{props.card.descr}</p>
        </div>
    )
}

export default ViewCard;