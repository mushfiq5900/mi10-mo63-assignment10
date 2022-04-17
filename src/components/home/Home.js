import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../../footer/Footer';
import Partners from '../partners/Partners';
import Services from '../services/Services';

const Home = () => {
    return (
        <div className='container-fluid p-0'>
            <div className="container">
                <Carousel className='mt-5'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./banner1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption className='bg-dark opacity-75'>
                            <h3>Weeding Photography</h3>
                            <p>Reliable packages for your weeding Photography</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./banner2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption className='bg-dark opacity-75'>
                            <h3>Cinematic Videography</h3>
                            <p>Best deals of cinematic Videograpy</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./banner3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption className='bg-dark opacity-75'>
                            <h3>Product Photography</h3>
                            <p>Cheap packages for product photography</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Services></Services>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;