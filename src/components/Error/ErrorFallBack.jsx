

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <h3>Algo no salio como esperabas</h3>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Intentar nuevamente</button>
        </div>
    )
}