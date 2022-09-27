import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from "react-router-dom";
import { logOut, selectCurrentToken, selectCurrentUser } from "../features/authSlice";
import { getUser } from "../features/singleUsersSlice"
import Login from "./Login"


function User(){
    const { user, loading, error } = useSelector(state => state.singleUser) 
    const currentUser = useSelector(selectCurrentUser)
    const currentToken = useSelector(selectCurrentToken)
    const dispatch = useDispatch()
    let id 
    if(currentUser) id = currentUser.id
    
    useEffect(() => {
        dispatch(getUser(id))
    }, [dispatch])

    // console.log(cart) 
    // console.log(cart.getLineItems());


    function handleLogout(e){
        e.preventDefault
        dispatch(logOut())
       return (<Navigate to="/"/>)
    }
    
    return (
        <div className="user-container">
            <div className="user-wrapper">
            {loading && <div>Loading...</div>}
            {!loading && error ? <div>Error: {error}</div>: null}
            {!loading && currentUser && currentToken ? (
                <>
                <h3>Welcome {currentUser.username}!</h3>
                <h4>General Information</h4>
                <ul className="user-info">
                    <li>First Name: {currentUser.fName}</li>
                    <li>Last Name: {currentUser.lName}</li>
                    <li>Username: {currentUser.username}</li>
                    <li>E-mail: {currentUser.email}</li>
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

