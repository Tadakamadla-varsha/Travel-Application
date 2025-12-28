import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import TourCard from "../../shared/TourCard"
import Tours from "../../pages/Tours"

export const Routers=()=>{
    return(
        <>
     
        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/home" element={<Home/>}/>
             <Route path="/tours" element={<Tours/>}/>
        </Routes>
        
        </>
    )
}