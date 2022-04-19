import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate('/login');
    }

    const handleSignup = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="container w-50 mt-5">
            <form onSubmit={handleSignup} className="row g-3">
                {/* <div className="col-md-12">
                    <label for="inputText1" className="form-label">Email</label>
                    <input onBlur={handleNameBlur} type="text" className="form-control" id="inputText1" />
                </div> */}
                <div className="col-md-12">
                    <label className="form-label">Email</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="inputEmail4" required />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" id="inputPassword4" required />
                </div>
                {/* <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div> */}
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;