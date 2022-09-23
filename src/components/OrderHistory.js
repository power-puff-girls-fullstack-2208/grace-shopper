import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const User = () => {
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