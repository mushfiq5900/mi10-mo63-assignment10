import React from 'react';
import Footer from '../footer/Footer';

const About = () => {
    return (
        <div className="container-fluid">
            <div className="container mb-5">
                <h1 className='text-center my-5'>About Me</h1>
                <div className="row justify-content-center">
                    <div className="card col-lg-8 p-5">
                        <div className='text-center'>
                            <img src="./myphoto.jpg" height={450} width={350} alt="" />
                        </div>
                        <div>
                            <h2 className="card-title text-center my-4">Md Mushfiqul Islam</h2>
                            <p className="text-left fs-5 text-secondary bg">
                                Hello! This is Mushfiqul Islam. I am a strugling web-developer who is working very hard to be a full-stack web developer. My goal is to learn every topics of web development. My goal is to establish my own web solution company within 2025. At present I'm workning more than five hours everyday to reach my goal. I strongly believe that hard work always pays off. So, inshaallah I will be a full-stack web developer very soon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;