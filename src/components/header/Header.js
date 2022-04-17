import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <ul className="nav nav-pills justify-content-center">
                <ul class="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                        <Link to="/">Services</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">About</Link>
                    </li>
                </ul>
            </ul>
        </div>
    );
};

export default Header;