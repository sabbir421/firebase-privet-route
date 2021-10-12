import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Link  className='header-link' to='/hone'>Home</Link>
           <Link  className='header-link' to='/register'>Register</Link>
           <Link  className='header-link' to='/login'>Login</Link>
          
        </div>
    );
};

export default Header;