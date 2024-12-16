import React from "react";
// import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Browse from "./components/Browse";
import Funiro from "./components/Funiro";
import OurProducts from "./components/OurProducts";
import { RoomInspiration } from "./components/RoomInspiration";
// import Footer from "./components/Footer";


export default function page (){
    return(
        <div>
             {/* <Header/> */}
            <Hero/>
            <Browse/>
            <OurProducts/>                                 
            <RoomInspiration/>
            <Funiro/>
            
        
            {/* <Footer/> */}
            


        </div>
    )
}