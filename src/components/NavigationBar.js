//imports 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


//navigation bar layout 
//the navigation bar links update the displayed coponent without refreshing the page
const NavigationBar = () => {
    return (
        <Navbar bg="primary" varient="dark">
            <Container>
                <Navbar.Brand href="/">Book Tracker</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/add-book'>Add Book</Nav.Link>
                    <Nav.Link href='/read-books'>Read Books</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

//allows me to import this .js file in app.js 
export default NavigationBar;