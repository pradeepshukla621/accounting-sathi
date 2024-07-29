import React from "react";
import "./LoginForm.css"

import  FaUser from "./../../assets/images/login/user-solid.svg"
import  FaLock from "./../../assets/images/login/lock-solid.svg"




function LoginForm () {
    return (
        <div className="custom-container" >
            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="email" placeholder="Username" required />
                        {/* <FaUser className="icon" /> */}
                       < img className="icon" src={FaUser} alt="" />
                       

                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        {/* <FaLock className="icon" /> */}
                        < img className="icon" src={FaLock} alt="" />
                        

                    </div>

                    <div className="remember-forget">
                        <label ><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have account? <a href="#">Register</a></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginForm;