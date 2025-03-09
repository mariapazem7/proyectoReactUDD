import { Link } from 'react-router-dom';
import './Footer.css'

export const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
        <footer className="footer">
        <div className="container text-center">
            <p>&copy; {currentYear} Random Advice. All rights reserved.</p>
            <p>
            <Link
                to="/"
                className="text-white text-decoration-none me-2"
                aria-label="Privacy Policy"
            >
                Privacy Policy 
            </Link>
            </p>
        </div>
        </footer>
        
    );
};