import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/authSlice'
import { selectCurrentToken, selectCurrentUser } from "../features/authSlice";


function Login(){
    const currentUser = useSelector(selectCurrentUser)
    const currentToken = useSelector(selectCurrentToken)
    
    console.log(currentUser)
    console.log(currentToken)

    const [form, setForm] = useState({
        username: 'rabbit122',
        password: 'helpme'
      })
    
      const dispatch = useDispatch();
    
      const handleChange = (props) => (e) => {
        setForm({
          ...form,
          [props]: e.target.value
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(form))
    }

    if(currentUser && currentToken) {
        return(<Navigate to="/users" />)
    }

    return (
        <div className="full-screen-container">
            <div className="login-container">
                <h1 className="login-title">Welcome to Pokemon TCG</h1>
                <p className="login-message">Please Register or Login to Enter</p>
                <form onSubmit={handleSubmit} className="form">
                    <div className="input-login">
                        <label htmlFor="text">Username</label>
                        <input onChange={handleChange('username')} type="text" name="username" value={form.username} placeholder="Enter Username" />
                        <span className="msg">Incorrect Username</span>
                    </div>

                    <div className="input-login">
                        <label htmlFor="password">Password</label>
                        <input onChange={handleChange('password')} type="password" name="password" value={form.password} placeholder="Enter Password" />
                        <span className="msg">Incorrect password</span>
                    </div>

                    <button type="submit" className="login-button">Login</button>
                    <Link to="/users/register" ><p className="register-link">Don't have an account? Register a new User</p></Link>
                    {/* <div id="signInDiv"></div> */}
                </form>
            </div>
        </div>
    )
}

export default Login