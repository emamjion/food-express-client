import React from 'react';
import './ChefSection.css';
import { FaThumbsUp } from 'react-icons/fa';
import chefs1 from '../../assets/images/team1.jpg';
import chefs2 from '../../assets/images/team2.jpg'


const ChefSection = () => {
    return (
        <div className='chef-section'>
            <div className='text-center'>
                <h3 className='chefs-sub-title'>Hero</h3>
                <h2 className='chefs-title'>Our Honerable Chefs</h2>
            </div>
            <div className='chefs-content'>
                <div className='row'>
                    <div className='chefs-img'>
                        <img src={chefs1} />
                    </div>
                    <h4 className='chefs-name'>Mark Anthony</h4>
                    <p className='chefs-experience'>Experience - 11 years</p>
                    <div className='recipes-like'>
                        <p>R - 489</p>
                        <p>< FaThumbsUp /> <span style={{marginLeft: '5px'}}>24K</span> </p>
                    </div>
                    <div className='view-recipes-btn'>
                        <button className='recipes-btn'>View Recipes</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='chefs-img'>
                        <img src={chefs2} />
                    </div>
                    <h4 className='chefs-name'>Mark Anthony</h4>
                    <p className='chefs-experience'>Experience - 11 years</p>
                    <div className='recipes-like'>
                        <p>R - 489</p>
                        <p>< FaThumbsUp /> <span style={{marginLeft: '5px'}}>24K</span></p>
                    </div>
                    <div className='view-recipes-btn'>
                        <button className='recipes-btn'>View Recipes</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='chefs-img'>
                        <img src={chefs1} />
                    </div>
                    <h4 className='chefs-name'>Mark Anthony</h4>
                    <p className='chefs-experience'>Experience - 11 years</p>
                    <div className='recipes-like'>
                        <p>R - 489</p>
                        <p>< FaThumbsUp /> <span style={{marginLeft: '5px'}}>24K</span></p>
                    </div>
                    <div className='view-recipes-btn'>
                        <button className='recipes-btn'>View Recipes</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='chefs-img'>
                        <img src={chefs2} />
                    </div>
                    <h4 className='chefs-name'>Mark Anthony</h4>
                    <p className='chefs-experience'>Experience - 11 years</p>
                    <div className='recipes-like'>
                        <p>R - 489</p>
                        <p>< FaThumbsUp /> <span style={{marginLeft: '5px'}}>24K</span></p>
                    </div>
                    <div className='view-recipes-btn'>
                        <button className='recipes-btn'>View Recipes</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='chefs-img'>
                        <img src={chefs1} />
                    </div>
                    <h4 className='chefs-name'>Mark Anthony</h4>
                    <p className='chefs-experience'>Experience - 11 years</p>
                    <div className='recipes-like'>
                        <p>R - 489</p>
                        <p>< FaThumbsUp /> <span style={{marginLeft: '5px'}}>24K</span></p>
                    </div>
                    <div className='view-recipes-btn'>
                        <button className='recipes-btn'>View Recipes</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='chefs-img'>
                        <img src={chefs2} />
                    </div>
                    <h4 className='chefs-name'>Mark Anthony</h4>
                    <p className='chefs-experience'>Experience - 11 years</p>
                    <div className='recipes-like'>
                        <p>R - 489</p>
                        <p>< FaThumbsUp /> <span style={{marginLeft: '5px'}}>24K</span></p>
                    </div>
                    <div className='view-recipes-btn'>
                        <button className='recipes-btn'>View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefSection;