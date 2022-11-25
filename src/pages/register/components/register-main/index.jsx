import React from "react";
import "./register-main.css";

const RegisterMain = () => {
    return (
        <div className="register-main ">
            <div className="register-container">
                <h1 className="main-heading my-4">Create Account 🤩</h1>
                <div className="form-container my-3">
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-container my-3">
                    <input
                        type="number"
                        placeholder="Mobile Number"
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-container my-3">
                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-container my-3">
                    <input
                        type="text"
                        placeholder="Date of birth(DD/MM/YYYY)"
                        onFocus={"(this.type='date')"}
                        required
                        className="form-control" />
                </div>
                <div className="form-container my-3">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="form-control" />
                </div>
                <div className="form-container my-3">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        className="form-control" />
                </div>
                <div className="form-container my-4">
                    <button className="main-btn size-bold">Create Account</button>
                </div>
                <div className="form-container my-4">
                    <span className="size-bold">Already have an Account? <a href="/login" className="text-pink">Login here</a> </span>
                </div>
            </div>
        </div>
    );
};

export default RegisterMain;
