import React from "react";
import { useParams } from "react-router-dom";
import classCompExample from "./classExample";
import Features from "./Features";


const Character = () => {
    const params = useParams()
    return (
        <div class = "info-div"> The Character Selected has the id number: {params.id}   </div>
       
    )
    
}

export default Character