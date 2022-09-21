import React from "react";


function Login(){
    const handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target[0].value
        const password = e.target[1].value

        console.log(username + password)
    }

    return (
        <div className="full-screen-container">
            <div className="login-container">
                <h1 className="login-title">Welcome to Pokemon TCG</h1>
                <p className="login-message">Please Register or Login to Enter</p>
                <form onSubmit={handleSubmit} className="form">
                    <div className="input-login">
                        <label htmlFor="text">Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter Username" />
                        <span className="msg">Incorrect Username</span>
                    </div>

                    <div className="input-login">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <span className="msg">Incorrect password</span>
                    </div>

                    <button type="submit" className="login-button">Login</button>
                    <p className="register-link">Don't have an account? Register a new User</p>
                    {/* <div id="signInDiv"></div> */}
                </form>
            </div>
        </div>
    )
}

export default Login