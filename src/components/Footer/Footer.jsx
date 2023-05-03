import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contact-box'>
                <h3 className='brand-title'>FoodEx.</h3>
                <h5 className='contact-info'>Connect with Us</h5>
                <div className='social'>
                    <Link>< FaFacebook /></Link>
                    <Link>< FaTwitter /></Link>
                    <Link>< FaInstagram /></Link>
                    <Link>< FaLinkedin /></Link>
                </div>
            </div>
            <div className='contact-box'>
                <h3 className='menu-links'>Our Food</h3>
                <Link>Beef Items</Link>
                <Link>Chicken Items</Link>
                <Link>Vorta Items</Link>
                <Link>Rice Items</Link>
            </div>
            <div className='contact-box address'>
                <h3>Contact</h3>
                <span className='map'> < FaMapMarkerAlt /> </span>
                <span className='envelope'> < FaEnvelope /> </span>
                <span className='phone'> < FaPhoneAlt /> </span>
            </div>
        </div>
    );
};

export default Footer;