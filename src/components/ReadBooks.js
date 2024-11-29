import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books"

//ReadBooks is a function component 
const ReadBooks = () => {
    const [bookData, setBookData] = useState([]); //bookData is state variable store teh fetched book data initially is set to emptu array

    //use effect hook fetches data from api
    useEffect(() => {
        axios.get('http://localhost:4000/api/books') //get req made 
        .then((response) => {
            setBookData(response.data); // once it gets data from apu ir set teh data to the state and empty dependency array ensures data is fetched only once
        })
        .catch((error) => {
            console.error("There was an error fetching the book data!", error);
        });
    }, []); //empty dependecy array ensuring it runs once
    

    return (
        <div>
            {/*<h3>Hello from read component</h3>*/}
            <Books books={bookData} /> {/*the books comp recieves bookdata as a prop and will render list of books based on this data */}
        </div>
    )
};

//allows me to import into app.js file 
export default ReadBooks;