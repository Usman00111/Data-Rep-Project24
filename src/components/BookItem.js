//imports 
import { useEffect } from "react";
import { Card } from "react-bootstrap";

//bookitem component for displaying individual books details 

const BookItem = ({ book }) => {
    useEffect(() => {
        console.log("Book Item:", book);
    }, [book]); // Logs book details whenever the prop changes

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
                </Card.Body>
            </Card>
        </div>
    )
};

export default BookItem;