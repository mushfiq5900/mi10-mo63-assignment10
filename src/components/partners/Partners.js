import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const Partners = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Partner Companies</h1>
            <div className="row row-cols-1 row-cols-md-5 g-4 mb-5">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://www.fortress.com.hk/_ui/responsive/theme-ftrhk/images/ftrhk/brand/fujifilm.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.pinimg.com/originals/f2/e8/e1/f2e8e14c1d1382cd7c2be3e82773fada.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.pinimg.com/originals/90/21/37/90213713b1e929017d7562d803ae6622.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://www.logolynx.com/images/logolynx/d6/d69894d2d0c6689ae037b316aef0694f.jpeg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://cdn.dribbble.com/users/45617/screenshots/5021228/frame_3_4x.png?compress=1&resize=400x300" className="card-img-top" alt="..." />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Partners;
