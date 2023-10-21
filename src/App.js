import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Statics from "./Components/Statics";
import TypingInput from "./Components/TypingInput";

const App = () => {
    return (
        <div>
            <Header />
            <TypingInput />
            <Statics />
            <Footer />
        </div>
    );
};

export default App;
