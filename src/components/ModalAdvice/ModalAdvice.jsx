import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../Error/ErrorFallBack';
import './ModalAdvice.css'

export const ModalAdvice = ({ children, showModal, handleClose }) => {

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Advice of the Day</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>{children}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    </ErrorBoundary>
  );
};

//Para probar el ErrorBoundary borré children y dejé el objeto vacío// 