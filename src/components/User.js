import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { logOut, selectCurrentToken, selectCurrentUser } from "../features/authSlice";
import { getUser } from "../features/singleUsersSlice"
import Login from "./Login"
import ProfileSidebar from "./ProfileSidebar";


function User(){
    const navigate = useNavigate()
    const { user, loading, error } = useSelector(state => state.singleUser) 
    const currentUser = useSelector(selectCurrentUser)
    const currentToken = useSelector(selectCurrentToken)
    const dispatch = useDispatch()
    let id 
    if(currentUser) id = currentUser.id
    
    useEffect(() => {
        if (id) {
            dispatch(getUser(id))
        }
    }, [dispatch])

    function handleLogout(e){
        e.preventDefault
        dispatch(logOut())
       navigate("/")
    }
    
    return (
        <div className="user-container content">
            <div className="user-wrapper">
            {loading && <div>Loading...</div>}
            {!loading && error ? <div>Error: {error}</div>: null}
            {!loading && currentUser && currentToken ? (
                <div>
                <h1>Welcome {currentUser.username}!</h1>
                <div className="user-info-container">
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
                <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
                </div>
            ): <Login />}
            </div>
        </div>
    )
}

export default User

