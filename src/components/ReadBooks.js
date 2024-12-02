import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books"
import { useParams } from "react-router-dom";
import BookItem from "./BookItem";

//ReadBooks is a function component 
const ReadBooks = () => {
   const { id } = useParams(); //extracts the book id from url param
   const[bookData, setBookData] = useState(null); //updated to store a single book
   const [error, setError] = useState(null); //tracks error 

    //use effect hook fetches data from api
    useEffect(() => {
        axios.get("http://localhost:4000/api/books")
        .then((response) => {
            setBookData(response.data); 
        })
        .catch((error) => {
            console.error("There was an error fetching the book data!", error);
            setError("Failed to load book data");
        });
}, []); // Dependency array is empty to only run once on mount
    
// reload function re re-fetch book data after deletion 
const Reload = () => {
    console.log("Reloading book data...");
    axios.get("http://localhost:4000/api/books")
    .then((response) => {
        setBookData(response.data);
    })
    .catch((error) => {
        console.error("Error reloading book data:", error);
    });

};


    return (
        <div>
            {error && <p>{error}</p>}
            {bookData ? (
                <Books books={bookData} ReloadData={Reload} />
        ) : (
            <p>Loading books...</p>
        )}
            {/*<h3>Hello from read component</h3>*/}
            {/*<Books books={bookData} /> {/*the books comp recieves bookdata as a prop and will render list of books based on this data */}
        </div>
    );
};

//allows me to import into app.js file 
export default ReadBooks;