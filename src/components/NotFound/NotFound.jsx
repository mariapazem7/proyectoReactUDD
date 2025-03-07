
import { Link } from 'react-router-dom'; // Importa el componente Link

export const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <p className="lead">Oops! The page you are looking for does not exist.</p>
        <p className="mb-4">It seems like the page you're looking for has been moved or doesn't exist.</p>
        <Link to="/" className="btn btn-secondary btn-lg">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};
