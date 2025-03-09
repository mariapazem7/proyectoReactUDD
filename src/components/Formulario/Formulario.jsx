import './Formulario.css'

export const Formulario = () => {
    
  return (
    <div className="container-form">
        <div className="container mt-5">
           
            <h2 className="text-center" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Got an advice? Join us and submit it!</h2>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <form>
                        <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            style={{ fontFamily: 'Noto Sans, sans-serif' }}
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            style={{ fontFamily: 'Noto Sans, sans-serif' }}
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="message" className="form-label">Advice</label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="4"
                            placeholder="Write your advice here"
                            style={{
                                fontFamily: 'Noto Sans, sans-serif',
                                resize: 'none' 
                            }}
                        ></textarea>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button type="submit" className="btn btn-secondary btn-lg" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                            Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
  );
};