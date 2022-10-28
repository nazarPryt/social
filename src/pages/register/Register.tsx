import React from 'react';
import './Register.scss'
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className='RegisterWrapper'>
            <div className='inner'>
                <div className='left'>
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, molestias.</p>
                    <span>Do you have an account?</span>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>

                </div>
                <div className='right'>
                    <h3>Register</h3>
                    <form>
                        <input type="text" placeholder={'Login'}/>
                        <input type="email" placeholder={'Email'}/>
                        <input type="password" placeholder={'Password'}/>
                        <input type="text" placeholder={'Your Name'}/>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;