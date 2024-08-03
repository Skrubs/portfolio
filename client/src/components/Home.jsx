import '../App.css';
import CardGrid from "./CardGrid.jsx";
import AcademicCapIcon from "../Icons.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {peopleList} from '../people.js';
import websiteLogo from '../assets/websitelogo.jpg';
import { loadUsers } from "../LoadUsers.jsx";
import {ArrowLeft} from "@mui/icons-material";

export default function Home() {


    const [user , setUser] = useState('');


       useEffect(() => {
            const postUsers = async () =>{
               for(const person of peopleList){
                   try{
                       await loadUsers(person);
                   }catch(error){
                       console.error('Failed ot load user: ', error);
                   }
               }
           }
           postUsers().catch(error =>{console.log(error)});
    }, []);

    useEffect(() => {
        if(sessionStorage.getItem('username') !== undefined){
            setUser(sessionStorage.getItem('username'));
        }
    }, []);


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
                        src={websiteLogo}
                        alt="Website Logo"
                        className="w-32 rounded-lg"
                        style={{ paddingBottom: '5px' }}
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
            <section className={'grid grid-cols-[1fr, 1fr, 1fr]'}>
                <div className={'flex flex-col border'}></div>
                <div className={'flex flex-col justify-center items-center'}>
                    <CardGrid/>
                </div>
                <div className={'border'}>
                    <h1>div2</h1>
                </div>
            </section>
        </div>
    );

}
