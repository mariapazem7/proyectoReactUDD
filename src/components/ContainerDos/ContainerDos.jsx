import './ContainerDos.css'

export const ContainerDos = ({ title, subtitle, backgroundClass }) => {
    return (
      <div className="container custom-container py-5">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-12 mx-auto text-center">
            <div 
              className={`p-5 text-white rounded ${backgroundClass}`}  
            >
              <h1 className="display-4">{title}</h1>
              <p className="lead">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };