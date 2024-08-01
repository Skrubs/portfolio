import '../App.css';
import CardGrid from "./CardGrid.jsx";
import AcademicCapIcon from "../Icons.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {peopleList} from '../people.js';
import websitelogo from '../assets/websitelogo.jpg';



export default function Home() {

    const [people, setPeople] = useState(peopleList);
    const serverPort = 'http://localhost:5001';
    const [user , setUser] = useState('');

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

                let email = generateUniqueEmail(person.name);
                let [firstName, lastName] = person.name.split(" ");
                let userName = `${firstName}${lastName.substring(0,1)}${Math.floor(Math.random()*10000)}`;

                try{
                    const response = await fetch(`${serverPort}/users/loadusers`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: userName,
                            firstname: firstName,
                            lastname: lastName,
                            password: "1",
                            email: email,
                            state: '1'
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

    if(peopleList === undefined){
        setPeople([]);
    }

    useEffect(() => {
        if(sessionStorage.getItem('username') !== undefined){
            setUser(sessionStorage.getItem('username'));
        }
    }, []);

    useEffect(() => {
       putPeople();
    }, [peopleList]);


    return(
        <div className={'flex flex-col m-32'}>

            <header className={'flex flex-1 h-32 w-full'}>
                <div className="relative flex flex-col w-full h-16 p-2 m-1">
                    <div className={'flex flex-row h-16 w-32'}>
                        <Link to={'/login'}>
                            <AcademicCapIcon className="absolute top-0 right-0"/>
                        </Link>
                        <div>
                            {(user !== "") && <h6>Logged In: {user}</h6>}
                        </div>
                    </div>

                </div>
                <div className={"flex flex-col items-center logodiv"} style={{ background: 'var(--Primary-Background)'}}>
                    <img
                        src={websitelogo}
                        alt="Website Logo"
                        className="w-32 rounded-lg"
                        style={{ paddingBottom: '16px' }}
                    />
                    <h1 className="text-4xl text-white font-bold text-center mb-8 relative" style={{
                        textShadow: `
                  2px 4px 0 #000, 
                  -2px -2px 0 #000, 
                  2px -2px 0 #000, 
                  -2px 2px 0 #000
                `
                    }}>

                        <span className="relative z-10">Welcome to Capstone</span>
                        <span
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-md opacity-5 transform scale-110"
                            aria-hidden="true"
                        ></span>
                    </h1>

                </div>

            </header>
            <section className={'flex flex-col justify-center items-center'}>
                <CardGrid/>
            </section>
        </div>
    );

}
