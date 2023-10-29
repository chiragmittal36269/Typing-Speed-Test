import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Statics from "./Components/Statics";
import TypingInput from "./Components/TypingInput";
import Login from "./Components/User/Login.js";
import Signup from "./Components/User/Signup.js";
import User from "./Components/User/User";

const App = () => {
    // let user = localStorage.getItem("user");

    // let loggedIn = localStorage.getItem("loggedIn");

    // console.log(loggedIn);

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/typing-speed-test" element={<TypingInput />} />
                <Route path="/statics" element={<Statics />} />
                <Route path="/user" element={<User />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* if({user} && {loggedIn})
                {<Route path="/user" element={<User />} />}
                else if({user} && {!loggedIn})
                {<Route path="/login" element={<Login />} />}
                else{<Route path="/signup" element={<Signup />} />} */}
                {/* {user} ? <Route path="/login" element={<Login />} /> :{" "}
                <Route path="/signup" element={<Signup />} /> */}
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
