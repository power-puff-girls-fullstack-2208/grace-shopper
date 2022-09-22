import React from "react";

function Register(){

    const handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

        console.log(username + email + password)
    }

    return (
        <div className="full-screen-container">
            <div className="login-container">
                <h1 className="login-title">Pokemon TCG? Change?</h1>
                <p className="login-message">Register New User</p>
                <form onSubmit={handleSubmit} className="form">
                    <div className="input-login">
                        <label htmlFor="text">Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter Username" />
                        <span className="msg">Username Taken</span>
                    </div>

                    <div className="input-login">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Valid email" />
                        <span className="msg">Valid email</span>
                    </div>

                    <div className="input-login">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="New Password" />
                        <span className="msg">Must meet Password criteria</span>
                    </div>

                    <button type="submit" className="login-button">Create User</button>
                    <p className="register-link">You have an account? Login</p>
                    {/* <div id="signInDiv"></div> */}
                </form>
            </div>
        </div>
    )
}

export default Register