import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Statics from "./Components/Statics";
import TypingInput from "./Components/TypingInput";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";

const App = () => {
    let user = localStorage.getItem("user");

    console.log(user);

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/typing-speed-test" element={<TypingInput />} />
                <Route path="/statics" element={<Statics />} />
                {user} ? <Route path="/login" element={<Login />} /> :{" "}
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
