import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

const NotFound = () => {
    return (
        <div className="container-fluid p-0">
            <div className="container">
                <h1 className='text-center text-danger my-5'>Page Not Found !!!</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-8 mb-4">
                        <div className="card">
                            <img src="https://www.seekahost.com/wp-content/uploads/2017/11/404-page-not-found.jpg" height={400} className="card-img-top" alt="" />
                        </div>
                    </div>
                    <div className='text-center mb-4'>
                        <Link className='btn btn-info' to="/">Go to Home</Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;