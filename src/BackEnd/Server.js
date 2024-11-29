//imports necessary modules 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//create express app
const app = express();
const port = 4000; // defining port as per required in assignment 

//middleweare set up 
app.use(cors()); // allows req from other domains
app.use(bodyParser.urlencoded({ extended: true})); //parses url encoded data
app.use(bodyParser.json()); //parses incoming json req

//mongodb connection 
mongoose.connect('mongodb+srv://admin:admin@admin1.zr6za.mongodb.net/DB15');

//defining a schema and model 
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: String,
    cover: String
});

const Book = mongoose.model('Book', bookSchema);

//Get route for fetching books from mongodb
app.get('/api/books', async (req, res) => {
    try{
        const books = await Book.find({});
        res.json(books);
    }catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Error fetching books "});
    }
});

//get data by id
app.get('/api/books/:id', async (req, res) => {
    const books = await booksModel.findById(req.params.id);
    res.send(books);
});

//post route for adding a new book 
app.post('/api/books', async (req, res) => {
    const {title, author, year, cover } = req.body;
    try {
        const newBook = new Book({title, author, year, cover });
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    }catch (error){
        console.error("Error adding: ", error);
        res.status(500).json({ message: "Error adding book" });
    }
});

///api/book/:id: This route fetches a specific book by its ID
app.get('/api/books/:id', async (req, res) => {
    let books = await booksModel.findById({ _id: req.params.id }); //The :id parameter represents the movie’s unique identifier.
    res.send(books); //The server looks up this movie in the database and sends its details back to the client.
});

//PUT /api/movie/:id: This route updates a specific movie’s information.
app.put('/api/books/:id', async (req, res) => {
    //When the user submits the edited data, this route takes the updated details from 
    //req.body and updates the movie in the database.
    let books = await booksModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(books);
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