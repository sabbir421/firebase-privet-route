import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>login</h1>
            <button>google sing in</button> <br/>
            <Link to='/register'>Register</Link>
        </div>
    );
};

export default Login;