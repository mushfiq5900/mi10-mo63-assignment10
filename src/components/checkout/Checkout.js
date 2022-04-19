import React from 'react';
import thankyou from './istockphoto-1271311350-612x612.jpg'

const Checkout = () => {
    return (
        <div className="container-fluid p-0">
            <div className="container">
                <h1 className='text-center my-5'>Checking Out....</h1>
                <h1 className='text-center text-info my-5'>Thanks For choosing our Service</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-8 mb-4">
                        <div className="card">
                            <img src={thankyou} height={400} className="card-img-top" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
