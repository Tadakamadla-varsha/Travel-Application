import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import Tours from "../../pages/Tours"
import Login from "../../pages/Login"

export const Routers=()=>{
    return(
        <>
     
        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/home" element={<Home/>}/>
             <Route path="/tours" element={<Tours/>}/>
             <Route path="/login" element={<Login/>}/>
        </Routes>
        
        </>
    )
}