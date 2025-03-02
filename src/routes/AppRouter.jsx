import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Navbar } from "../components/Navbar/Navbar"



export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>react
                {/* Agregar ruta NotFound*/}
            </Routes>
        </>
    )
}