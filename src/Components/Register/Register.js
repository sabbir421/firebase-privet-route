import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>register here</h1>
            <button>sing up</button> <br/>
            <Link to="/yahoo">Log in</Link>
           
        </div>
    );
};

export default Register;