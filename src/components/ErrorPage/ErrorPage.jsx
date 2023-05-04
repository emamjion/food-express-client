import React from 'react';
import './ErrorPage.css';
import { FaRegClock } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className='fourOfour'>
            <h1 className='four-main'>4 <span className='middle'> < FaRegClock /> </span>4</h1>
            <p className='four-sub'>This page does not Exist now</p>
        </div>
    );
};

export default ErrorPage;