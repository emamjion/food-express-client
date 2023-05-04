import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import './Chef.css'
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {id, chefPicture, chefName, recipesNum, likes, experienceYears} = chef;
    
    return (
        <div className='row'>
            <div className='chefs-img'>
                <img src={chefPicture} />
            </div>
            <h4 className='chefs-name'>{chefName}</h4>
            <p className='chefs-experience'>Experience - {experienceYears} years</p>
            <div className='recipes-like'>
                <p>Recipe - {recipesNum}</p>
                <p>< FaThumbsUp /> <span style={{marginLeft: '5px'}}>{likes}</span> </p>
            </div>
            <div className='view-recipes-btn'>
                <Link to={`/chefs/${id}`}><button className='recipes-btn'>View Recipes</button></Link>
            </div>
        </div>
    );
};

export default Chef;