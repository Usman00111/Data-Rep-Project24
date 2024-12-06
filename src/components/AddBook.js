import { useState } from "react";
import axios from "axios";


//addbook comp for adding book 
const AddBook = () => {
    // this is a usestate Hooks to manage the form fields and error state
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [cover, setCover] = useState('');
    const [error, setError] = useState('');

    //validateyear func checks if the year is a runner
    const validateYear = (year) => /^\d+$/.test(year);



    // handSubmit func is called whne the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault(); //prevent form from reloading the page on submit

        //validate year input
        if (!validateYear(year)) {
            setError("Year must be an integer") 
            return;
        }

        //created a new book object with the form data
        const newBook = {
            title,
            author,
            year,
            cover
        };

        //send post requiest to backend to add the book
        axios.post('http://localhost:4000/api/books', newBook) //send post req to backend to add the new book 
            .then((response) => {
                console.log('Book Added: ', response.data);
                window.location.reload(); //refreshes the page after adding the updated book
            })
            .catch((error) => { 
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
                        onChange={(e) => setTitle(e.target.value)} // updates state with title input
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
                        type="number" //changed to UI for better UI control as i am now only accepting number as an input
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