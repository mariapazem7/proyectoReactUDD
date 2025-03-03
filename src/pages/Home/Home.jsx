
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";

export const Home = () => {
    return (
      <>
        <Header
            color="info"
            title="Bienvenidos a Nuestra App"
            subtitle="Aiuda se nos acabaron las vacaciones :c"
        />
         <Container
            title="Sobre nosotros" 
            subtitle="Conoce más acerca de nuestro equipo y misión."
            buttonText="Conocer más"
            buttonLink="/about"
    />
     </>
)
}