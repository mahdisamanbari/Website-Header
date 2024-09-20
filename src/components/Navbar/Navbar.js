import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>MSN-hero</div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Explor</li>
                <li>About</li>
                <li className='nav-contact'>Contact</li>

            </ul>
            
        </div>
    );
};

export default Navbar;