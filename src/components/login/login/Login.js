import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../social/Social';
import './Login.css'


const Login = () => {

    return (
        <div className="container w-50 mt-5">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <p>New in Splash Photography? <Link className='click-link' to="/register">Click to Register</Link></p>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <Social></Social>
        </div>
    );
};

export default Login;