import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books"
import { useParams } from "react-router-dom";

//ReadBooks is a function component 
const ReadBooks = () => {
   const { id } = useParams(); //extracts the book id from url param
   const[bookData, setBookData] = useState(null); //updated to store a single book
   const [error, setError] = useState(null); //tracks error 

    //use effect hook fetches data from api
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:4000/api/books/${id}`) //get req made 
            .then((response) => {
                setBookData(response.data); // once it gets data from apu ir set teh data to the state and empty dependency array ensures data is fetched only once
            })
            .catch((error) => {
                console.error("There was an error fetching the book data!", error);
            });
        }
    }, [id]); //runs when id changes
    

    return (
        <div>
             {bookData ? (
            <>
                <h3>{bookData.title}</h3>
                <p>Author: {bookData.author}</p>
                <p>Year: {bookData.year}</p>
                <img src={bookData.cover} alt={bookData.title} style={{ width: "200px" }} />
            </>
        ) : (
            <p>Loading book details...</p> // Add a loading state while data is being fetched
        )}
            {/*<h3>Hello from read component</h3>*/}
            {/*<Books books={bookData} /> {/*the books comp recieves bookdata as a prop and will render list of books based on this data */}
        </div>
    )
};

//allows me to import into app.js file 
export default ReadBooks;