import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from "../features/singleUsersSlice"
import Login from "./Login"


function User(){
    const { user, loading, error } = useSelector(state => state.singleUser) 
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUser(1))
    }, [dispatch])
    console.log(user)

    function handleLogout(){

    }
    
    return (
        <div className="user-container">
            <div className="user-wrapper">
            {loading && <div>Loading...</div>}
            {!loading && error ? <div>Error: {error}</div>: null}
            {!loading && user ? (
                <>
                <h1>Welcome {user.username}!</h1>
                <button onClick={handleLogout}>Logout</button>
                </>
            ): <Login />}
            </div>
        </div>
    )
}

export default User

