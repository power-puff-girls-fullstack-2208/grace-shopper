import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const user = useSelector();

    useEffect(() => {
        dispatch();
    })

    return (
        <div className = 'usersContainer'>
            <div className=''>

            </div>
        </div>
    )
}