import { useState} from "react";
import SearchBar from "../components-sub/SearchBar.jsx";

export default function Appbar(){

    return(
        <div style={{
            height: '200px',
            width: '60%',
            color: 'cyan',
            backgroundColor: 'slategray',
            display: 'block',
            border: 'solid yellow 3px',
        }}>
            sup
            <SearchBar/>
        </div>
    );






}