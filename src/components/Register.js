import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { addNewUser } from '../features/usersSlice'

function Register(){
    const navigate = useNavigate()
    const [ user, setUser ] = useState({})
    const [ submitted, setSubmit ] = useState(false)
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
      })
    const [passCheck, setCheck] = useState({
        confirmPassword: '',
    })  
    
      const dispatch = useDispatch();
    
      const handleChange = (props) => (e) => {
        setForm({
          ...form,
          [props]: e.target.value
        })
      }

      const handleConfirmPassword = (props) => (e) => {
        setCheck({
          ...passCheck,
          [props]: e.target.value
        })
      }

      function checkPassword(){
        let password = form.password
        let confirmPassword = passCheck.confirmPassword

        if(password.length != 0){
            if(password == confirmPassword){
                return true
            }
            else {
                return false
            }
        }

      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()

        if(!form.username || !form.email || !form.password || !form.lName || !form.fName){
            alert("Field cannot be left empty!")
        }
        else{
            if(checkPassword()){
                setUser(form)
                try{
                    await dispatch(addNewUser(form)) ;
                    navigate("/users/login")
                }
               catch (ex) {
                console.log(ex)
                alert("Username or E-mail is Taken")
               }
            } else {
                alert("Passwords don't match!")
            }
        }

      }
      
    //   if(submitted === true){
    //     return(<Navigate to="/users/login" />)
    //   }


    return (
        <div className="full-screen-container content">
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
                        <input onChange={handleChange('password')} id="password" type="password" name="password" value={form.password} placeholder="New Password" />
                        <span className="msg">Must meet Password criteria</span>
                    </div>
                    
                    <div className="input-login">
                        <label htmlFor="password">Enter password again</label>
                        <input onChange={handleConfirmPassword("confirmPassword")} type="password" name="confirmPassword" id="confirmPassword" placeholder="Re-type Password" />
                        <span id="matchMsg" className="msg"></span>
                    </div>

                    <button type="submit" className="login-button">Start Collecting Today!</button>
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