import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TypingInput = () => {
    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(15);
    const [testStart, setTestStart] = useState(false);
    const [testEnd, setTestEnd] = useState(false);

    let keyChar = 0;
    let keyWord = 0;

    let para =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    function handleUserInput() {
        if (countdown > 0) {
            setTestStart(true);
            setTestEnd(false);
        } else {
            setTestEnd(true);
            setTestStart(false);
        }
    }

    useEffect(() => {
        let timer;
        function startTimer() {
            if (testStart && countdown > 0) {
                timer = setInterval(() => {
                    setCountdown(countdown - 1);
                }, 1000);
            } else if (countdown === 0) {
                setTestEnd(true);
                setTestStart(false);
                navigate("/statics");
            } else {
                setTestEnd(true);
                setTestStart(false);
            }
        }

        startTimer();

        // Return a cleanup function to clear the interval when the component unmounts
        // we did the below statement because our page is rendering again and again so our timer will run again and again and make new timer every time.
        // so clear the previous timer we use this return statement
        return () => clearInterval(timer);
    }, [countdown, testStart, navigate]);

    // useEffect(() => {
    //     let timer;
    //     if (countdown > 8) {
    //         timer = setInterval(() => {j
    //             console.log("hello");
    //             setCountdown(countdown - 1);
    //         }, 1000);
    //     }
    //     console.log("hi");
    //     return () => clearInterval(timer);
    // }, [countdown]);

    // useEffect(() => {
    //     if (countdown > 8) {
    //         const timer = setInterval(() => {
    //             console.log("hello");
    //             setCountdown(countdown - 1);
    //         }, 1000);

    //         console.log("hi");
    //         return () => clearInterval(timer);
    //     }
    // }, [countdown]);

    // useEffect(() => {
    //     let timer;
    //     function startTimer() {
    //         if (countdown > 0) {
    //             timer = setInterval(() => {
    //                 setCountdown(countdown - 1);
    //             }, 1000);
    //         }
    //     }

    //     startTimer();
    //     // Clear the interval when the component unmounts or when countdown reaches 0.
    //     // If countdown changes or the component re-renders, it clears (stops) the timer to avoid issues.
    //     // it is used to clean the previous running timer. i.e. every time a timer starts so it stops the previous timer for smooth functioning

    //     // After setting up the timer, there's a return statement within the useEffect.
    //     // This is a cleanup function. It's used to clear (stop) the timer when the component re-renders or
    //     // when the countdown variable changes.clearInterval(timer) is called,
    //     // where timer is the reference to the interval previously created.
    //     return () => clearInterval(timer);
    // }, [countdown]);

    return (
        <div className="typingInput">
            <div className="row-1">
                <div>
                    <p>{countdown}</p>
                </div>
                <div className="buttons">
                    <button onClick={() => setCountdown(15)}>15s</button>
                    <button onClick={() => setCountdown(30)}>30s</button>
                    <button onClick={() => setCountdown(60)}>60s</button>
                </div>
            </div>

            <div className="text-box" onClick={handleUserInput}>
                {/* {para.split("").map((char) => {
                    return <span key={"char" + keyChar++}>{char}</span>;
                })} */}

                {para.split(" ").map((word) => {
                    return (
                        <span className="word" key={"word" + keyWord++}>
                            {word.split("").map((char) => {
                                return (
                                    <span
                                        className="character"
                                        key={"char" + keyChar++}>
                                        {char}
                                    </span>
                                );
                            })}
                        </span>
                    );
                })}
            </div>

            <div className="row-2">
                <button>
                    <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="RefreshIcon">
                        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
                    </svg>
                </button>
            </div>

            <div className="row-3">
                <button>esc</button>
                <p>-</p>
                <p>reset</p>
            </div>

            <div className="row-4">
                <div className="buttons">
                    <button>10</button>
                    <button>50</button>
                    <button>80</button>
                    <button>100</button>
                </div>
                <p>-</p>
                <p>no. of words</p>
            </div>
        </div>
    );
};

export default TypingInput;
