import React from 'react';
import './Blog.css';
import { jsPDF } from "jspdf";

const Blog = () => {
    
    return (
        <div>
            <div className='qAndA-section'>
                <div className='qAndA'>
                    <h2 className='question'>Tell us the differences between uncontrolled and controlled components</h2>
                    <p className='answer'>
                        Controlled - It does not maintain its internal state. Here, data is controlled by the parent component. It accepts its current value as a prop. It allows validation control. It has better control over the form elements and data.
                        <br/>
                        Uncontrolled - It maintains its internal states. Here, data is controlled by the DOM itself. It uses a ref for their current values. It does not allow validation control. It has limited control over the form elements and data.
                    </p>
                </div>
                <div className='qAndA'>
                    <h2 className='question'>How to validate React props using PropTypes</h2>
                    <p className='answer'>
                        PropTypes.any: The prop can be of any data type <br/>
                        PropTypes.bool: The prop should be a Boolean <br/>
                        PropTypes.number: The prop should be a number <br/>
                        PropTypes.object: The prop should be an object <br/>
                    </p>
                </div>
                <div className='qAndA'>
                    <h2 className='question'>Tell us the difference between nodejs and express js.</h2>
                    <p className='answer'>
                        nodejs is the package which provides the JavaScript run-time environment. <br/> On the other hand, ExpressJs is a framework that sits on top of NodeJs helps us to handle request and response.
                    </p>
                </div>
                <div className='qAndA'>
                    <h2 className='question'>What is a custom hook, and why will you create a custom hook?</h2>
                    <p className='answer'>
                    Custom React hooks are an essential tool that let us add special, unique functionality to our React applications. if we want to add a certain feature to our application, we can simply install a third-party library that is made to solve our problem.
                    As a React developer, it's important to learn the process of creating custom hooks to solve problems or add missing features within our own React projects.
                    </p>
                </div>
            </div>
            <div className='btn-section'>
                <button className='download-btn'>Download to PDF</button>
            </div>
        </div>
    );
};

export default Blog;