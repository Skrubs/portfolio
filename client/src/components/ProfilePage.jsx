import banner from "../assets/banner.jpg";
import {useState} from "react";
import {peopleList} from "../people.js";



export default function ProfilePage(user){

    const name = `${user.firstname} + " " +  ${user.lastname}`;
    const [person, setPerson] = useState('');

    for(const p of peopleList){
        if(name === p.name){
            setPerson(p);
        }
    }


    return(
        <div className={'flex flex-col w-full h-full'}>
            <header>
                <h1>{person.name}</h1>
                <h2>{person.twitterx}</h2>
            </header>
            <div data-id={'banner'} className={'flex flex-row w-screen h-64'}>
                <img src={banner} alt={'banner'} style={"width: 100vw; height: auto; display: block"}/>
            </div>


        </div>
    );



}