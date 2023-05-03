import React from 'react';
import './About.css';
import aboutImg from '../../assets/images/about.png';

const About = () => {
    return (
        <div className='about'>
            {/* About section */}
            <div className='about-img'>
                <img src={aboutImg} />
            </div>
            <div className='about-text'>
                <h3 className='about-sub-title'>About Us</h3>
                <h2 className='about-title'>Food Express</h2>
                <p className='about-desc'>
                    This is a food category website and I am presenting the bangladeshi cuisine. Because The majority of Bangladeshi people are ethnic Bengali, accustomed to Bengali cuisine, with a minority of non-Bengalis, many used to cuisines from different traditions and regions Bangladeshi cooking features more meat dishes than the cuisine of neighbouring West Bengal, India.
                </p>
                <a className='about-btn' href="">About Us</a>
            </div>
        </div>
    );
};

export default About;