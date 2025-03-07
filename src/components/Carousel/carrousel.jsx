
import './Carrousel.css'

export const Carousel = ({ images }) => {
    return (
        <div className='containerCarrousel'>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        data-bs-interval="10000"
                        key={index}
                        >
                        <img src={image.src} className="d-block w-100" alt={image.alt || "carousel image"} />
                        </div>
                    ))}
                </div>
                <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
                >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
                >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>

      </div>
    );
  };