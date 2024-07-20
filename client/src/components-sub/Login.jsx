import "../App.css";
import { useState } from 'react';



export default function Login() {




        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();
            // Handle login logic here
            console.log('Username:', username);
            console.log('Password:', password);
        };

        const handleCancel = () => {
            setUsername('');
            setPassword('');
        };

        return (

            <div className={'login_container'}>
                <header className={'login_header'}>
                    <h1 className={'h1_login'}>Login</h1>
                </header>
                <section className={'login_section_1'}>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={'login-button-div'}>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                </section>
            </div>


        );

}