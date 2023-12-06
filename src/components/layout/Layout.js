import { Footer } from "../footer/Footer";
import {Outlet} from "react-router-dom";
import { Header } from "../header/Header";

export const Layout = () =>{
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
            
        </>
    )
}