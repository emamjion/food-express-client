import React from 'react';
import './NewsLetter.css';
import newsImg from '../../assets/images/discount.svg';

const NewsLetter = () => {
    return (
        <div className='newsletter-container'>
            <div className='newsletter-content'>
                <div className='news-img'>
                    <img src={newsImg} />
                </div>
                <div className='news-text'>
                    <h3 className='news-sub-title'>Visit To Our Zone</h3>
                    <h2 className='news-title'>Newsletter</h2>
                    <p className='news-desc'>
                        Visit to our newsletter and receive 20% <br/> discount from your order.
                    </p>
                </div>
                <div className="letter">
                    <form className='letter-form'>
                        <input className='letter-input' type="email" name='email' placeholder='Your Email' />
                        <input className='visit-btn' type="submit" value="Visit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;