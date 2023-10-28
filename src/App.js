import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Statics from "./Components/Statics";
import TypingInput from "./Components/TypingInput";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/typing-speed-test" element={<TypingInput />} />
                <Route path="/statics" element={<Statics />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
