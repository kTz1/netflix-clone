import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './register.scss';

export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = async (e, res) => {
        e.preventDefault();
        setUsername(usernameRef.current.value);
        setPassword(passwordRef.current.value);
        try {
            const res = await axios.post("auth/register", {email, username, password});
            history.push("/login");
            console.log(res.data);
        } catch (err) {}
    };

    return (
        <div className='register'>
            <div className='top'>
                <div className='wrapper'>
                    <img 
                        className='logo' 
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' 
                        alt=''
                    />
                    <button type='button' className='loginButton'>Sign In</button>
                </div>
            </div>
            <div className='container'>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                {!email ? (
                    <div className='input'>
                        <input type='email' placeholder='Email address' ref={emailRef} />
                        <button className='registerButton' onClick={handleStart}>Get Started</button>
                    </div>
                ) : (
                    <form className='input'>
                        <input type='username' placeholder='Username' ref={usernameRef} />
                        <input type='password' placeholder='Password' ref={passwordRef} />
                        <button className='registerButton' onClick={handleFinish}>Start</button>
                    </form>
                )}
            </div>
        </div>
    )
}
