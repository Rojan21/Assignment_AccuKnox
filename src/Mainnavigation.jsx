import { Outlet } from "react-router-dom"
import Header from "./Header"

function Mainnavigation(){
    return(
        <>
     <Header/>
     <Outlet/>
        </>
    )
}


export default Mainnavigation