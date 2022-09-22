import React from "react";
import { useSelector } from 'react-redux'


function User(){
    const { users } = useSelector() 

    return (
        <div className="user-container">
            <div className="user-wrapper">
                
            </div>
        </div>
    )
}

export default User