import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div>
                <h2>Tell us the differences between uncontrolled and controlled components</h2>
                <p>
                Controlled - It does not maintain its internal state. Here, data is controlled by the parent component. It accepts its current value as a prop. It allows validation control. It has better control over the form elements and data.
                <br/>
                Uncontrolled - It maintains its internal states. Here, data is controlled by the DOM itself. It uses a ref for their current values. It does not allow validation control. It has limited control over the form elements and data.
                </p>
            </div>
            <div>
                <h2>How to validate React props using PropTypes</h2>
                <p>
                    PropTypes.any: The prop can be of any data type <br/>
                    PropTypes.bool: The prop should be a Boolean <br/>
                    PropTypes.number: The prop should be a number <br/>
                    PropTypes.object: The prop should be an object <br/>
                </p>
            </div>
        </div>
    );
};

export default Blog;