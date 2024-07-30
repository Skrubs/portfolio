import {useState} from "react";
import { Link } from 'react-router-dom';



export default function RegisterPage(){
    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [email, setUserEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const home_url = '/';
    const serverPort = 'http://localhost:5001/users/register';
    const [user, setUser] = useState('');

    const validatePassword = (password) => {
        const lengthCheck = password.length >= 6 && password.length <= 12;
        const upperCaseCheck = /[A-Z]/.test(password);
        const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return lengthCheck && upperCaseCheck && specialCharCheck;
    };


    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (!validatePassword(newPassword)) {
            setErrorMessage('Password must be 6-12 characters long, contain at least one uppercase letter, and one special character.');
        } else {
            setErrorMessage('');
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        if (newConfirmPassword !== password) {
            setErrorMessage('Passwords do not match.');
        } else {
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validatePassword(password) && password === confirmPassword) {
            setSuccessMessage('Password is valid and passwords match!')
            setTimeout(() => {
                setSuccessMessage('');
            }, 2000);
            setSuccess(true);

            //Post to /register backend
            const response = await fetch(serverPort, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const userPayload = await response.json();
            sessionStorage.setItem('username', JSON.stringify(userPayload.username));
            setUser(sessionStorage.getItem('username'));


        } else {
            alert('Please ensure the passwords meet the criteria and match.');
        }
    }
    const handleCancel = ()=>{
        setUsername('');
        setPassword('');
    }

    return(
        <>
            {success ? (
                <section>
                    <h1>{user} Your Account has been Created!<br/>
                        Please click the link below to sign in.</h1>
                    <Link to={home_url}>Sign in</Link>
                </section>
            ) : (<div className={'login_container'}>
                <header className={'login_header'}>
                    <h1 className={'h1_login'}>Register</h1>
                </header>
                <section className={'login_section_1'}>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div>
                            <h6>To register please enter the following information.<br/>
                                Password must:<br/>
                                * 6-12 Characters<br/>
                                * at least 1 uppercase<br/>
                                * at least 1 special character<br/>
                            </h6>

                            <div>
                                <input
                                    placeholder={'username'}
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete={'off'}
                                />
                            </div>
                            <div>
                                <input
                                    placeholder={'email'}
                                    type="text"
                                    id='email'
                                    value={email}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>

                            <input
                                placeholder={'password'}
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div>
                            <input
                                placeholder={'confirm password'}
                                type={'password'}
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                        </div>
                        <div>
                            {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
                            {successMessage && <div style={{color: 'green'}}>{successMessage}</div>}
                        </div>
                        <div className={'login-button-div'}>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleCancel}>Cancel</button>
                        </div>
                        <aside className={'register_already'}>
                            <div className={'inner_register'}>
                                <h3>Already Registered?</h3>
                                <Link to={home_url}>Sign in</Link>
                            </div>

                        </aside>

                    </form>
                </section>
            </div>)}


        </>

    );

}
