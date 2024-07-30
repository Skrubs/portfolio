import '../App.css';
import CardGrid from "./CardGrid.jsx";
import AcademicCapIcon from "../Icons.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {peopleList} from '../people.js';


export default function Home() {
    const [people, setPeople] = useState(peopleList);
    const serverPort = 'http://localhost:5001';


    const checkUserExists = async (username) => {
        const response = await fetch(`${serverPort}/users/checkUser`, {
            method: 'POST',
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

    const putPeople = ()=>{
        people.map(async (person) => {

            const userExists = await checkUserExists(person.name);
            if(!userExists){
                const generateUniqueEmail = (name) => {
                    const randomNumber = Math.floor(Math.random() * 1000); // Generates a number between 0 and 999
                    return `${name}${randomNumber}@gmail.com`;
                };

                const email = generateUniqueEmail(person.name);

                try{
                    const response = await fetch(`${serverPort}/users/register`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: person.name,
                            password: "!passwordYes124",
                            email: email,
                        }),
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                }catch(error){
                    if(error.message.includes('duplicate')){
                        console.log(`${person.name} already exists.`);
                    }
                }
            }

        });
    }


    useEffect(() => {
        putPeople();
    }, []);

    if(peopleList === undefined){
        setPeople([]);
    }

    return(
        <div className={'flex flex-col m-32'}>
            <header className={'flex flex-1 h-32 w-full'}>
                <div className="relative flex flex-col w-full h-16 p-2 m-1">
                    <Link to={'/login'}>
                        <AcademicCapIcon className="absolute top-0 right-0"/>
                    </Link>
                </div>
                <h1 className="text-5xl text-white font-bold text-center mb-8 relative">
                    <span className="relative z-10">Welcome to Capstone</span>
                    <span
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-md opacity-75 transform scale-110"
                        aria-hidden="true"
                    ></span>
                </h1>
            </header>
            <section className={'flex flex-col justify-center items-center'}>
                <CardGrid/>
            </section>
        </div>
    );

}
