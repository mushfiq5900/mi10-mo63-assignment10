import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../social/Social';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate('/');
    }

    const handleLogin = event => {
        signInWithEmailAndPassword(email, password)
        event.preventDefault();
    }


    return (
        <div className="container w-50 mt-5">
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <p>New in Splash Photography? <Link className='click-link' to="/register">Click to Register</Link></p>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <Social></Social>
        </div>
    );
};

export default Login;