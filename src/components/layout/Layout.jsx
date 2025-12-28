import Footer from "../footer/Footer"
import Header from "../navbar/Header"
import { Routers } from "../router/Routers"

export const Layout=()=>{
    return(
        <>
        <Header/>
       <Routers/> 
       <Footer/>
        </>
    )
}