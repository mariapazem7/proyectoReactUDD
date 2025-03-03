import { useAdvice } from '../../hooks/useAdvice';

export const Advice = () => {
    const [advice, loading, error ] = useAdvice(); // Usamos el hook
  
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;
  
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto text-center">
            <div className="p-5 bg-primary text-white rounded">
              <h1 className="display-4">Advice of the day:</h1>
              <p className="lead">"{advice}"</p>
            </div>
          </div>
        </div>
      </div>
    );
  };