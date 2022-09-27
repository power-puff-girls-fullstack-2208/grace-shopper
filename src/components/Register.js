import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { addNewUser } from '../features/usersSlice'
import User from "./User";

function Register(){
    const [ user, setUser ] = useState({})
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
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

        setUser(form)
        console.log(user)
        dispatch(addNewUser(form));
      }


    return (
        <div className="full-screen-container">
            <div className="login-container">
                <h1 className="login-title">Pokemon TCG</h1>
                <p className="login-message">Register New User</p>
                <form onSubmit={handleSubmit} className="form">
                    <div className="input-login">
                        <label htmlFor="text">Username</label>
                        <input onChange={handleChange('username')} type="text" name="username" value={form.username} placeholder="Enter Username" />
                        <span className="msg">Username Taken</span>
                    </div>
                    
                    <div className="input-login">
                        <label htmlFor="text">First Name</label>
                        <input onChange={handleChange('fName')} type="text" name="fName" value={form.fName} placeholder="Enter First Name" />
                    </div>
                    
                    <div className="input-login">
                        <label htmlFor="text">Last Name</label>
                        <input onChange={handleChange('lName')} type="text" name="lName" value={form.lName} placeholder="Enter Last Name" />
                    </div>

                    <div className="input-login">
                        <label htmlFor="email">Email</label>
                        <input onChange={handleChange('email')} type="email" name="email" value={form.email} placeholder="Enter Valid email" />
                        <span className="msg">Valid email</span>
                    </div>

                    <div className="input-login">
                        <label htmlFor="password">Password</label>
                        <input onChange={handleChange('password')} type="password" name="password" value={form.password} placeholder="New Password" />
                        <span className="msg">Must meet Password criteria</span>
                    </div>

                    <button type="submit" className="login-button">Create User</button>
                    <Link to="/users/login" ><p className="register-link">You have an account? Login</p></Link>
                    {/* <div id="signInDiv"></div> */}
                </form>
            </div>
        </div>
    )
}

export default Register


// <div className="registered">
//                 <h3>Thank you for reigstering!</h3>
//                 <Link to="/users/login"><p>Back to Login</p></Link>
//             </div>