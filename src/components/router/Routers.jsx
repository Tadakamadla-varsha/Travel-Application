import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import TourCard from "../../shared/TourCard"

export const Routers=()=>{
    return(
        <>
     
        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/home" element={<Home/>}/>
             <Route path="/Tourcard" element={<TourCard />} />

        </Routes>
        
        </>
    )
}