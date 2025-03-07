
import { useAdvice } from '../../hooks/useAdvice';
import { ContainerDos} from '../../components/ContainerDos/ContainerDos'
import "./Advice.css"

export const Advice = () => {
  
    const [advice, loading, error ] = useAdvice(); 
  
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;
  
    return (
    <>
      <div className="primer-contenedor">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 mx-auto text-center">
              <div className="p-5 bg-light-lila text-white rounded">
                <h1 className="display-4">Advice of the day:</h1>
                <p className="lead">"{advice}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContainerDos  
            title="" 
            subtitle="Searching for random advice can be a fun and refreshing way to gain new perspectives and motivation. Sometimes, a simple, unexpected suggestion is all you need to lift your spirits and tackle the day ahead. On our site, every piece of advice is an opportunity to inspire, motivate, and help you see things from a different angle. Give the unexpected a chance and find the boost you're looking for!"
            backgroundClass= "bg-green" />
      
      
    </>
    );
  };