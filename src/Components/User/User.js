import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("user"));

    let { firstName, lastName, email } = userData;

    console.log(userData);

    function logoutButton() {
        // localStorage.removeItem("user");
        localStorage.removeItem("loggedIn");
        alert("you are successfully logged out from the system...");
        navigate("/login");
    }

    return (
        <div className="user-container">
            <h2>Profile Page</h2>

            <div className="firstName">
                <label htmlFor="fName">First Name:</label>
                <input
                    type="text"
                    name="fName"
                    id="fName"
                    value={firstName}
                    disabled
                />
            </div>
            <div className="lastName">
                <label htmlFor="lName">Last Name:</label>
                <input
                    type="text"
                    name="lName"
                    id="lName"
                    value={lastName}
                    disabled
                />
            </div>
            <div className="email">
                <label htmlFor="email">Email Id:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    disabled
                />
            </div>

            {/* <div>
                <h4>First Name:</h4>
                <p>{firstName}</p>
            </div>

            <div>
                <h4>Last Name:</h4>
                <p>{lastName}</p>
            </div>

            <div>
                <h4>Email Id:</h4>
                <p>{email}</p>
            </div> */}

            <button onClick={logoutButton}>logout</button>
        </div>
    );
};

export default User;
