import {useState} from "react";



export default function FakeToast(msg, isUsed){



    const[title, setTitle] = useState('');
    if(isUsed){
        setTitle("Warning");
    }else{
        setTitle("Message");
    }

    return(
        <section className={'flex flex-col w-16 h-16 p'}>
            <header>
                <h1>{title}</h1>
            </header>
            <div>
                <p>{msg}</p>
            </div>
        </section>

    );



}