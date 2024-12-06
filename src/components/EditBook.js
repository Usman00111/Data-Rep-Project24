import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBook = () => {
    const {id} = useParams(); //extracts book id from the url
    //STATE variables for book details and error handling
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [cover, setCover] = useState("");
    const navigate = useNavigate(); //navigate hook to redirect after updating
    const [error, setError] = useState(''); //intializing error state

    //fetch book data when component mounts or when ID changes
    useEffect(() => {
        axios.get(`http://localhost:4000/api/books/${id}`)
            .then(response => {
                setTitle(response.data.title); //set title from repsonse data
                setAuthor(response.data.author);
                setYear(response.data.year);
                setCover(response.data.cover);
            })
            .catch((error) => {
                console.error("Error fetching book:", error);
                setError("Failed to fetch book data.");
            });
    }, [id]); //re-run if the book id changes

    //validate year numb
    const validateYear = (year) => /^\d+$/.test(year);

    //handle form submission to update book details
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents defualt form submission 

        //check if the year is valid
        if (!validateYear(year)){
            setError("Year must be a number value!");
            return; //stop further excution 
        }

        //prepares updated book data
        const updatedBook = { title, author, year, cover }; 

        //making PUT req to update the book on the server
        axios.put(`http://localhost:4000/api/books/${id}`, updatedBook)
            .then(response => {
                console.log("book updated", response.data);
                navigate('/read-books'); //redirect to the book list
            })
            .catch(error => console.log(error));
    };

    //render form with pre-filled value for editing 
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
                <label>Year:</label>
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div>
                <label>Cover Image URL:</label>
                <input type="text" value={cover} onChange={(e) => setCover(e.target.value)} />
            </div>
            <button type="submit">Update Book</button>
        </form>
    );

};

export default EditBook;