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
        console.log("Book Item:", book);
    }, [book]); // Logs book details whenever the prop changes

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:4000/api/books/${book._id}`)
            .then(() => {
                window.location.reload(); // realod the page to update the book list
            })
            .catch((error) => {
                console.error("Error deleting book:", error);
            });
    };

    return (
        <div>
           {/* <h3>Hello from the BookItem Component</h3>*/}
            <Card>
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
                        <Button variant="danger" onClick={handleDelete} style={{marginLeft: "10px" }}>
                            Delete
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookItem;