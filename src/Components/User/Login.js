import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("user"));

    // console.log(userData);

    const [userDetails, setUserDetails] = useState({ email: "", password: "" });

    let { email, password } = userDetails;

    function loginButton() {
        if (!email || !password) {
            alert("please fill all the details");
            return;
        }
        if (email !== userData.email) {
            alert("email id is wrong please enter the correct one...");
            return;
        }
        if (password !== userData.password) {
            alert("password id is wrong please enter the correct one...");
            return;
        }

        alert("you are a true user");
        localStorage.setItem("loggedIn", JSON.stringify(userDetails));
        setUserDetails({ ...userDetails, email: "", password: "" });
        navigate("./user");
    }

    return (
        <div className="login-container">
            <h2>Login Page</h2>

            <div className="email">
                <label htmlFor="email">Email Id:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="please enter your email id"
                    value={userDetails.email}
                    onChange={(e) => {
                        setUserDetails({
                            ...userDetails,
                            email: e.target.value,
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
                    value={userDetails.password}
                    onChange={(e) => {
                        setUserDetails({
                            ...userDetails,
                            password: e.target.value,
                        });
                    }}
                />
            </div>

            <button onClick={loginButton}>Login</button>
        </div>
    );
};

export default Login;
