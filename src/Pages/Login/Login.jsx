import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    
    const handleLogin = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess('User has been login successfully!');
            setError('');
            
            form.reset();
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            setError(error.message);
            setSuccess('');
        })
    }
    
    return (
        <div className='container forms'>
            <div className="form login">
                <div className="form-content">
                    <h2 className='login-title'>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className='field input-field'>
                            <input type="email" name="email" placeholder='Your email' className='email' required />
                        </div>
                        <div className='field input-field'>
                            <input type="password" name="password" placeholder='Your password' className='password' required />
                        </div>
                        <div className='form-link'>
                            <Link to="" className="forgot-password">Forgot password?</Link>
                        </div>

                        <div className='field button-field'>
                            <input type="submit" value='Login' className='btn-login' />
                        </div>

                        <div className='form-link'>
                            <span>Don't have an account? <Link to="/register" className="dont-acc">Register</Link></span>
                        </div>
                        <div className='success-error'>
                            <p className='success-msg'>{success}</p>
                            <p className='error-msg'>{error}</p>
                        </div>
                    </form>
                </div>
                <div className="line"></div>
                <div className="media-option">
                    <Link>
                        <p className='field google'>
                            <span> < FaGoogle /> </span>
                            <span style={{marginLeft: '5px'}}>Login with Google</span>
                        </p>
                    </Link>
                    <Link>
                        <p className='field github'>
                            <span> < FaGithub /> </span>
                            <span style={{marginLeft: '5px'}}>Login with Github</span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;