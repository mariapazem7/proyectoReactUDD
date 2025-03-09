

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <div role="alert" style={{ padding: '20px', backgroundColor: '#f8d7da', color: '#721c24' }}>
        <h2>¡Algo salió mal!</h2>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Intentar nuevamente</button>
      </div>
    );
  };