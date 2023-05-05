import React from 'react';
import LazyLoad from 'react-lazy-load';
import './ViewRecipe.css';
import { FaThumbsUp } from 'react-icons/fa';
import ViewRecipeDetails from '../ViewRecipeDetails/ViewRecipeDetails';

const ViewRecipe = ({viewDetails}) => {
    const {chefPicture, description, chefName, likes, experienceYears, recipesNum,recipe} = viewDetails;
    return (
        <div className='viewRecipe-section'>
            {/* view recipe section */}
            <div className='view-recipe-banner'>
                <div className='viewRecipe-img'>
                    <LazyLoad height={762} offset={300}>
                        <img src={chefPicture} />
                    </LazyLoad>
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
            <div className='recipe-section'>
                {
                    recipe.map(rec => <ViewRecipeDetails
                        rec={rec}
                    >

                    </ViewRecipeDetails>)
                }
            </div>
        </div>
    );
};

export default ViewRecipe;