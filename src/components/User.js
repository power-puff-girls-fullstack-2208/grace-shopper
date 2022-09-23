import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from "react-router-dom";
import { getUser } from "../features/singleUsersSlice"
import Login from "./Login"


function User(){
    const { user, loading, error } = useSelector(state => state.singleUser) 
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUser(1))
    }, [dispatch])

    function handleLogout(e){
        e.preventDefault
        console.log("logout was clicked")
       return (<Navigate to="/login" />)
    }
    
    return (
        <div className="user-container">
            <div className="user-wrapper">
            {loading && <div>Loading...</div>}
            {!loading && error ? <div>Error: {error}</div>: null}
            {!loading && user ? (
                <>
                <h3>Welcome {user.username}!</h3>
                <h4>General Information</h4>
                <ul className="user-info">
                    <li>First Name: {user.fName}</li>
                    <li>Last Name: {user.lName}</li>
                    <li>Username: {user.username}</li>
                    <li>E-mail: {user.email}</li>
                </ul>
                <h4>Order History</h4>
                <ul className="order-history">

                </ul>
                <button onClick={handleLogout}>Logout</button>
                </>
            ): <Login />}
            </div>
        </div>
    )
}

export default User

