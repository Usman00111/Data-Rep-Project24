import React, { useState } from "react";

// the contact comp representing the contact page functionality 
const Contact = () => {
    //return <h1>this is contact page</h1>
    //state to store form data like first name ...etc
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
    });

    //state to track if the form has been submitted
    const [submitted, setSubmitted] = useState(false);

    //this hanles changes to input fields and updates the corresponding state
    const handleChange = (e) => {
        const { name, value } = e.target; // destructure the input name and value
        //this updates the form data state with new input values
        setFormData({ ...formData, [name]: value });
    };

    //handles form submission 
    const handleSubmit = (e) => {
        e.preventDefault();// prevents default form sub behabiour 
        setSubmitted(true); // marks the form as submittted
    };

    //resets the form state and marks it as not submitted
    const handleReset = () => {
        //clears form fiels
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            comment: "",
        });
        setSubmitted(false); // resets the submitted state
    };
    //returns the bellow on screen to client on website
    return (
        <div className="contact-container">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Contact Us</h2>
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Comment:</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="thank-you-message">
              <h2>Your query has been processed!</h2>
              <p>Our team will get back to you soon.</p>
              <button onClick={handleReset}>Go Back</button>
            </div>
          )}
        </div>
      );
};

//allows me to import this .js file into app.js 
export default Contact;