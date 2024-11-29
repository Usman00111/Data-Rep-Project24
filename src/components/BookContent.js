import React from "react";

//BookContent.js is a resuable component which will make this app more modular so its nice and clean not confusing as i will develop this further 
const BookContent = () => {
    return (
        <div>
            <h1>Welcome to the Book Tracker App!, this is Content</h1>
            <h2>Today is {new Date().toLocaleDateString()}.</h2>
            <h3>It is {new Date().toLocaleTimeString()}.</h3>
        </div>
    );
};

export default BookContent;