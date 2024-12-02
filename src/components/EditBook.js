import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBook = () => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [cover, setCover] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/api/books/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setAuthor(response.data.author);
                setYear(response.data.year);
                setCover(response.data.cover);
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = { title, author, year, cover };
        axios.put(`http://localhost:4000/api/books/${id}`, updatedBook)
            .then(response => {
                console.log(response.data);
                navigate('/read-books'); //redirect to the book list
            })
            .catch(error => console.log(error));
    };

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