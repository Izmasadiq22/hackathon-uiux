import Browse from "@/components/Browse";
import Funiro from "@/components/Funiro";
import { Hero } from "@/components/Hero";
import OurProducts from "@/components/OurProducts";
import { RoomInspiration } from "@/components/RoomInspiration";
import React from "react";



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