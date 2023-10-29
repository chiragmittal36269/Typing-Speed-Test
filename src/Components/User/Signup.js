import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    let [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    let { firstName, lastName, email, password, confirmPassword } = userData;

    function signUpButton() {
        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            alert("please fill all the details...");
            return;
        }

        if (password !== confirmPassword) {
            alert("password fields are not matched...");
            return;
        }

        alert("Data added successfully");
        localStorage.setItem("user", JSON.stringify(userData));
        setUserData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
        navigate("/login");
    }

    return (
        <div className="signup-container">
            <h2>SignUp Page</h2>

            <div className="firstName">
                <label htmlFor="fName">First Name:</label>
                <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="please enter your first name"
                    value={userData.firstName}
                    onChange={(e) => {
                        setUserData({
                            ...userData,
                            firstName: e.target.value.trim(),
                        });
                    }}
                />
            </div>
            <div className="lastName">
                <label htmlFor="lName">Last Name:</label>
                <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="please enter your last name"
                    value={userData.lastName}
                    onChange={(e) => {
                        setUserData({
                            ...userData,
                            lastName: e.target.value.trim(),
                        });
                    }}
                />
            </div>
            <div className="email">
                <label htmlFor="email">Email Id:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="please enter your email id"
                    value={userData.email}
                    onChange={(e) => {
                        setUserData({
                            ...userData,
                            email: e.target.value.trim(),
                        });
                    }}
                />
            </div>
            <div className="password">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="please enter your password"
                    value={userData.password}
                    onChange={(e) => {
                        setUserData({
                            ...userData,
                            password: e.target.value.trim(),
                        });
                    }}
                />
            </div>
            <div className="confirmPassword">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="please re-enter your password"
                    value={userData.confirmPassword}
                    onChange={(e) => {
                        setUserData({
                            ...userData,
                            confirmPassword: e.target.value.trim(),
                        });
                    }}
                />
            </div>

            <button onClick={signUpButton}>Signup</button>
        </div>
    );
};

export default Signup;
