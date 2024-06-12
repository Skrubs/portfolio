import "../App.css";
import {LoremIpsum} from "react-lorem-ipsum";
import * as React from "react";


export default function Card(){



    return(
        <div className="card">
            <img style={{borderRadius: 20}}  src='https://via.placeholder.com/150' alt='I dont know'/>
            <h2 style={{backgroundColor: "red"}}>Test Title Change Later</h2>
            <p><LoremIpsum p={2}/></p>

        </div>
    );




}