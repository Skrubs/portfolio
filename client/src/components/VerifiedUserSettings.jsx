import '../App.css';
import React, { useState } from 'react';
import UserSettingsModal from '../components-sub/UserSettingsModal.jsx';
import NavBar from '../components-sub/NavBar.jsx';
import PrimarySearchAppBar from '../components-sub/PrimarySearchAppBar.jsx';




export default function VerifiedUserSettings(){


    return(
        <>
            <NavBar/>
            <PrimarySearchAppBar/>
                <UserSettingsModal/>



        </>


    );

}