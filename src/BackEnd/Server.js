//imports necessary modules 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//create express app and defining port for the server
const app = express();
const port = 4000; // defining port as per required in assignment 

//middleweare set up for handling cross-rigin req and parsing incoming data
app.use(cors()); // allows req from other domains
app.use(bodyParser.urlencoded({ extended: true})); //parses url encoded data
app.use(bodyParser.json()); //parses incoming json req

//mongodb connection 
mongoose.connect('mongodb+srv://admin:admin@admin1.zr6za.mongodb.net/DB15');

//defining a schema and model 
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: { type : Number,
            required: true,
            validate: {
                validator: Number.isInteger,
                message: "Year must be Number!"
            }

    },
            
    cover: String
});

//creates the book model for schema
const Book = mongoose.model('Book', bookSchema);

//Get route for fetching books from mongodb
app.get('/api/books', async (req, res) => {
    try{
        const books = await Book.find({}); //fetches all bookk from database
        res.json(books); //returns in json format
    }catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Error fetching books "});
    }
});

//get ROUTE to fetch a nsingle book by id
app.get('/api/books/:id', async (req, res) => {
    try{
        const book = await Book.findById(req.params.id); //finds the book by id
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.send(book); //returns the found book
    }catch (error) {
        console.error("Error fetching book by iD", error);
        res.status(500).json({ message: "Error fetching book" });
    }
});

//post route for adding a new book to the database
app.post('/api/books', async (req, res) => {
    const {title, author, year, cover } = req.body; //extracts book details from the req body
    try {
        const newBook = new Book({title, author, year, cover }); //new book object created
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    }catch (error){
        console.error("Error adding: ", error);
        res.status(500).json({ message: "Error adding book" });
    }
});

//PUT /api/movie/:id: This route updates a specific movie’s information by its id
app.put('/api/books/:id', async (req, res) => {
    //When the user submits the edited data, this route takes the updated details from 
    //req.body and updates the movie in the database.
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
          if (!updatedBook) return res.status(404).json({ message: "Book not found" });
          res.json(updatedBook); //returns the updated book details
        } catch (error) {
          console.error("Error updating book:", error);
          res.status(500).json({ message: "Error updating book" });
        }
      });

      //Delete route to delte a book by ID
      app.delete('/api/books/:id', async (req, res) => {
        console.log('Deleting book with ID:', req.params.id); //log the book ID being deleted
        try {
            const book = await Book.findByIdAndDelete(req.params.id); //detele the book by ID
            if (!book) return res.status(404).json({ message: "Book not found" });
            res.status(200).send({ message: "Book deleted successfullly", book });
        } catch (error) {
            console.error("Error deleting book:", error);
            res.status(500).json({ message: "Error deleting book" });
        }
      });


//bellow is book data
/*const bookData = [
    {
        title: "Atomic Habbits",
        author: "James Clear",
        year: "2018",
        cover: "https://web.cs.dal.ca/~gjjariwala/csci2170/lab9/images/Non-Fiction/Atomic-Habits.jpeg"
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        year: "1997",
        cover: "https://gregory.ph/cdn/shop/products/BuyRichDadPoorDadinPhilippines.jpg?v=1626535585" 
    },
    {
        title: "Imran Khan",
        author: "Imran Khan",
        year: "2022",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Pakistan_A_Personal_History_book_cover.jpg/220px-Pakistan_A_Personal_History_book_cover.jpg"
    }
];
*/

//get route defined for api/books which responds with the bookdata array json format
/*app.get('/api/books', (req, res) => {
    res.json(bookData);
  
});
*/

//starts server on port 4000 and logs message to console 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});