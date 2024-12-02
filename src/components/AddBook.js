import { useState } from "react";
import axios from "axios";


//this is  function for adding book 
const AddBook = () => {
    // this is a usestate Hooks create state variable for each book field and their setters for start they are empty
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [cover, setCover] = useState('');

    // logs current values of form field to the console and prevents the default form submission 
    const handleSubmit = (e) => {
        e.preventDefault();

        //created a new book object
        const newBook = {
            title,
            author,
            year,
            cover
        };

        //send post requiest to backend to add the book
        axios.post('http://localhost:4000/api/books', newBook) //send post req to backend including newbook data
            .then((response) => { // handles the successful response from server and loging the confimration message 
                console.log('Book Added: ', response.data);
                window.location.reload(); //refreshes the page after adding a book
            })
            .catch((error) => { // func hdandles any error during the req
                console.error('Error adding book:', error);
            });
    };

    return (
        <div>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Book Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} // pmchange event handler updates the state with new input value
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Author: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Year: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Cover Image URL: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                        required
                    />
                </div>
                <input type="submit" value="Add Book" className="btn btn-primary" />

            </form>
        </div>
    );

};

//allows me to import into app.js and call this .js file and its data
export default AddBook;