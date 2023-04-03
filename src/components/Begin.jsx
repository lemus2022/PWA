import React,{useEffect, useState} from "react";
import { allCharacters } from "../functions/functions";
import Character from "./Character";



const Home = () => {

    const [Characters, setCharacters] = useState(null)

    useEffect(()=>{
        allCharacters(setCharacters)
    },[])


    return (
        <>
        
        {Characters != null ? (
            Characters.map(Character => (
                <div key={Character.id}>
                    <img src={Character.image} alt=""/>
                    <a href={`/Character/${Character.id}`}>{Character.name}</a>
                    <br></br>
                    <div class="descriptions">
                    <>Status: {Character.status}</>
                    <br></br>
                    <>Gender: {Character.gender}</>
                    <br></br>
                    <>Specie: {Character.species}</>
                    </div>
                </div>
            ))
        ) : ('There are no Characters')}
        </>
    )
}

export default Home