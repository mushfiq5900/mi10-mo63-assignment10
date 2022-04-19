import React from 'react';
import './Social.css'
import googleicon from './googleicon.png'
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }
    if (user) {
        navigate('/');
    }
    return (
        <div className="container">
            <div className='text-center mt-3'>
                <div className='linedraw'></div>
                <p className='d-inline-block px-5'>or</p>
                <div className='linedraw'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block mx-auto'> <img width='40' src={googleicon} alt="" />Login With Gmail</button>
        </div>
    );
};

export default Social;