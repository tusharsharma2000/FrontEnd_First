import React from "react";
import "./login-main.css";

const LoginMain = () => {
    return (
        <div className="login-main ">
            <div className="login-container">
                <h1 className="main-heading my-4">Login to Continue 👋</h1>
                <div className="form-container my-3">
                    <input
                        type="email"
                        name="emailid"
                        placeholder="Email Address"
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-container my-2">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        className="form-control" />
                </div>
                <div className="form-container text-right my-1">
                    <a href="#/" className="text-pink link-small" >Forget Password?</a>
                </div>
                <div className="form-container my-4">
                    <button className="main-btn size-bold">Sign In</button>
                </div>
                <div className="form-container my-4">
                    <span className="size-bold">Don't have an Account? <a href="/register" className="text-pink">Create New</a> </span>
                </div>
            </div>
        </div>
    );
};

export default LoginMain;
