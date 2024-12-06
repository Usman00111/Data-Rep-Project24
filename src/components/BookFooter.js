import { FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa";
import { Link } from "react-router-dom";
// this is a footer which i will use further to provide more info and give more web app look for my proj
const BookFooter = () => {
    return (

        <footer className="footer">
          <div className="footer-content">
            <div className="social-icons"> {/* links ot di */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
            </div>
            {/*links to those pages currently just place holders */}
            <div className="footer-links">
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
            <div className="footer-bottom">
              <p>© 2024 Your Company</p>
            </div>
          </div>
        </footer>
      );
};

//this line allows me to import this .js file into app.js 
export default BookFooter;