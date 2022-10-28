import React from 'react';
import './Login.scss'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className='loginWrapper'>
            <div className='inner'>
                <div className='left'>
                    <h1>My Social</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, molestias.</p>
                    <span>Dont you have an account?</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>

                </div>
                <div className='right'>
                    <h3>Login</h3>
                    <form>
                        <input type="text" placeholder={'Login'}/>
                        <input type="password" placeholder={'Password'}/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;