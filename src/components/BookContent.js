import React from "react";


//BookContent.js is a resuable component which will make this app more modular so its nice and clean not confusing as i will develop this further 
const BookContent = () => {
    return (
        <div className="contentPage">
            <h1 className="title">Welcome to the Book Tracker App!</h1>
            <p className="description">
                This is the place where you can keep track of your favorite books, 
                discover new ones, and manage your personal library efficiently. 
                Let's get started!
            </p>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Current Date & Time</h5>
                    <p className="card-text">
                        Today is {new Date().toLocaleDateString()} and it is currently {new Date().toLocaleTimeString()}.
                    </p>
                    <button className="btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default BookContent;