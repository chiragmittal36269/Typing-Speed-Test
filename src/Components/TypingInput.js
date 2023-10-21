import React, { useState } from "react";

const TypingInput = () => {
    const [time, setTime] = useState(15);

    let keyChar = 0;

    let para =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
        <div>
            <div className="row-1">
                <div>
                    <p>{time}</p>
                </div>
                <div className="buttons">
                    <button onClick={() => setTime(15)}>15s</button>
                    <button onClick={() => setTime(30)}>30s</button>
                    <button onClick={() => setTime(60)}>60s</button>
                </div>
            </div>

            <div className="text-box">
                {para.split("").map((char) => {
                    return <span key={"char" + keyChar++}>{char}</span>;
                })}
            </div>
        </div>
    );
};

export default TypingInput;
