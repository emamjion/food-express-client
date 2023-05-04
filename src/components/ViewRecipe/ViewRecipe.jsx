import React from 'react';
import './ViewRecipe.css';
import { FaThumbsUp } from 'react-icons/fa';

const ViewRecipe = ({viewDetails}) => {
    const {chefPicture, description, chefName, likes, experienceYears, recipesNum} = viewDetails;
    
    return (
        <div className='viewRecipe-section'>
            {/* view recipe section */}
            <div className='view-recipe-banner'>
                <div className='viewRecipe-img'>
                    <img src={chefPicture} />
                </div>
                <div className='viewRecipe-text'>
                    <h2 className='viewRecipe-title'>{chefName}</h2>
                    <p className='viewRecipe-experience'>experience - {experienceYears} years</p>
                    <p className='viewRecipe-desc'>
                        {description}
                    </p>
                    <div className='like-recipe-num'> 
                        <div>
                            <p>< FaThumbsUp /> <span style={{marginLeft: '5px'}}>{likes}</span></p>
                        </div>
                        <div>
                            <p>Recipe - {recipesNum}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* recipe cardf */}
            <div>
                
            </div>
        </div>
    );
};

export default ViewRecipe;