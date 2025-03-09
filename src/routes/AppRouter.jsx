import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Navbar } from '../components/Navbar/Navbar'
import { About } from '../pages/About/About'
import { Advice } from '../pages/Advice/Advice'
import { Footer } from '../components/Footer/Footer'
import { NotFound } from '../components/NotFound/NotFound'


export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/advice" element={<Advice/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer/>
    
        </>
    );
};