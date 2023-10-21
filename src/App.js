import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TypingInput from "./Components/TypingInput";

const App = () => {
    return (
        <div className="app">
            <Header />
            <TypingInput />
            {/* <Statics /> */}
            <Footer />
        </div>
    );
};

export default App;
