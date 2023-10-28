import React from "react";

const Signup = () => {
    return (
        <div className="signup-container">
            <h2>SignUp Page</h2>

            <div className="firstName">
                <label htmlFor="fName">First Name:</label>
                <input type="text" name="fName" id="fName" />
            </div>
            <div className="lastName">
                <label htmlFor="lName">Last Name:</label>
                <input type="text" name="lName" id="lName" />
            </div>
            <div className="email">
                <label htmlFor="email">Email Id:</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="password">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
            </div>

            <button>Signup</button>
        </div>
    );
};

export default Signup;
