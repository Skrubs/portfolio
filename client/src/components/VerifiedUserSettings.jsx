import '../App.css';
import {useEffect, useState} from "react";
import UserSettingsModal from '../components-sub/UserSettingsModal.jsx';
import NavBar from '../components-sub/NavBar.jsx';



export default function VerifiedUserSettings(){
    const serverPort = 'http://localhost:5001';

    const checkUserExists = async (username) => {

        const response = await fetch(`${serverPort}/users/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data.exists;
    };







    return(
        <>
            <NavBar/>
                <UserSettingsModal/>
            <div>{console.log(checkUserExists())}</div>


        </>


    );

}