//imports 
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import e from "cors";

//bookitem component for displaying individual books details 

const BookItem = ({ book }) => {
    useEffect(() => {
        console.log("Book Item:", book); // Logs book details whenever the book prop changes
    }, [book]);

    // handleDelete func the book when the delete button is clicked 
    const handleDelete = (e) => {
        e.preventDefault(); // prevents the default behavious of the event 
        axios.delete(`http://localhost:4000/api/books/${book._id}`) // send Delete req to the server
            .then(() => {
                window.location.reload(); // realods the page to update the book list after deletion 
            })
            .catch((error) => {
                console.error("Error deleting book:", error); // logs any error during deletion 
            });
    };

    return (
        <div className="book-card">
            {/* <h3>Hello from the BookItem Component</h3>*/}
            <div className="book-card">
                <Card> {/* renders a card for displaying book details */}
                    <Card.Header>{book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img
                                src={book.cover}
                                alt={book.title}
                                style={{ width: "150px", height: "200px" }}
                            />
                            <footer>Author: {book.author}</footer>
                            <footer>Published: {book.year}</footer>
                        </blockquote>
                        <div style={{ marginTop: "10px" }}>
                            {/* link to naviagte to the edit page */}
                            <Link to={`/edit/${book._id}`} className="btn btn-primary">
                                Edit
                            </Link>
                            <Button variant="danger" onClick={handleDelete} style={{ marginLeft: "10px" }}>
                                Delete
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default BookItem;