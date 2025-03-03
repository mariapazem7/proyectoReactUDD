import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Navbar } from "../components/Navbar/navbar"
import { About } from "../pages/About/About"
import { Advice } from "../pages/Advice/Advice"


export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/advice" element={<Advice/>}/>
                {/* Agregar ruta NotFound*/}
            </Routes>
        </>
    )
}