import React, { useContext, useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        setError('');
        setSuccess('');
        if(password.length < 6){
            setError('The password is less than 6 characters');
            return;
        }

        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess('User has been created successfully!');
            setError('');
            
            form.reset();
        })
        .catch(error => {
            setError(error.message);
            setSuccess('');
        })
    }
    
    
    return (
        <div className='container forms'>
            <div className="form register">
                <div className="form-content">
                    <h2 className='register-title'>Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className='field input-field'>
                            <input type="text" name="name" placeholder='Your name' className='name' required />
                        </div>
                        <div className='field input-field'>
                            <input type="text" name="photo" placeholder='Your PhotoUrl' className='photo' required />
                        </div>
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
                            <input type="submit" value='Register' className='btn-register' />
                        </div>

                        <div className='form-link'>
                            <span>Already have an account? <Link to="/login" className="already-acc">Login</Link></span>
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

export default Register;