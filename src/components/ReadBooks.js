import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books" //import books comp to display a list of books
import { useParams } from "react-router-dom"; //Hook to extract parampeter from the URL
import BookItem from "./BookItem";

//ReadBooks is a function component that displays a list of books
const ReadBooks = () => {
   const { id } = useParams(); //extracts the book id from url param
   const[bookData, setBookData] = useState(null); //store the list of books fetched
   const [error, setError] = useState(null); //tracks error during api req

    //use effect hook fetches data from api when comp mounts
    useEffect(() => {
        axios.get("http://localhost:4000/api/books")
        .then((response) => {
            setBookData(response.data); //set the book data to the state
        })
        .catch((error) => {
            console.error("There was an error fetching the book data!", error);
            setError("Failed to load book data"); //set error state if fetching fails
        });
}, []); // Dependency array is empty to only run once when comp mount
    
// reload function re re-fetch book data after deletion 
const Reload = () => {
    console.log("Reloading book data...");
    axios.get("http://localhost:4000/api/books")
    .then((response) => {
        setBookData(response.data); // update the book data state
    })
    .catch((error) => {
        console.error("Error reloading book data:", error);
    });

};


    return (
        <div>
            {error && <p>{error}</p>} {/*display error messge if any error occor */}
            {bookData ? (
                <Books books={bookData} ReloadData={Reload} /> //pass hook data and reload func to books comp 
        ) : (
            <p>Loading books...</p> //shows while data isbeing fetched
        )}
            {/*<h3>Hello from read component</h3>*/}
            {/*<Books books={bookData} /> {/*the books comp recieves bookdata as a prop and will render list of books based on this data */}
        </div>
    );
};

//allows me to import into app.js file 
export default ReadBooks;