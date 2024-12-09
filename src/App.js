//imports of other files i need
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import BookHeader from './components/BookHeader';
import BookContent from './components/BookContent';
import BookFooter from './components/BookFooter';
import ReadBooks from './components/ReadBooks';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import About from './components/About';

//function to call in all the .js files 
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<BookContent />} />
        <Route path='/add-book' element={<AddBook />} /> 
        <Route path="/read-books" element={<ReadBooks />} />
        {/* <Route path='/read-books/:id' element={<ReadBooks />} /> */}
        <Route path='/edit/:id' element={<EditBook />} />
        <Route path="/about" element={<About />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <BookFooter />
    </Router>
  );
}

export default App;