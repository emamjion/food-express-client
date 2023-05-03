import React from 'react';
import './FoodMenu.css';
import food from '../../assets/images/food.png'

const FoodMenu = () => {
    return (
        <div className='food-menu'>
            <div className='text-center'>
                <h3 className='food-menu-sub-title'>Food Menu</h3>
                <h2 className='food-menu-title'>Delicious Food</h2>
            </div>
            <div className='menu-content'>
                <div className='box'>
                    <div className='box-content'>
                        <div className='box-img'>
                            <img src={food} />
                        </div>
                        <div className='box-text'>
                            <h4 className='box-title'>Corn-shrimp</h4>
                            <p className='box-desc'>Whales and darkness moving from cattle</p>
                            <h6 className='box-price'>800 Taka</h6>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-content'>
                        <div className='box-img'>
                            <img src={food} />
                        </div>
                        <div className='box-text'>
                            <h4 className='box-title'>Corn-shrimp</h4>
                            <p className='box-desc'>Whales and darkness moving from cattle</p>
                            <h6 className='box-price'>800 Taka</h6>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-content'>
                        <div className='box-img'>
                            <img src={food} />
                        </div>
                        <div className='box-text'>
                            <h4 className='box-title'>Corn-shrimp</h4>
                            <p className='box-desc'>Whales and darkness moving from cattle</p>
                            <h6 className='box-price'>800 Taka</h6>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-content'>
                        <div className='box-img'>
                            <img src={food} />
                        </div>
                        <div className='box-text'>
                            <h4 className='box-title'>Corn-shrimp</h4>
                            <p className='box-desc'>Whales and darkness moving from cattle</p>
                            <h6 className='box-price'>800 Taka</h6>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-content'>
                        <div className='box-img'>
                            <img src={food} />
                        </div>
                        <div className='box-text'>
                            <h4 className='box-title'>Corn-shrimp</h4>
                            <p className='box-desc'>Whales and darkness moving from cattle</p>
                            <h6 className='box-price'>800 Taka</h6>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-content'>
                        <div className='box-img'>
                            <img src={food} />
                        </div>
                        <div className='box-text'>
                            <h4 className='box-title'>Corn-shrimp</h4>
                            <p className='box-desc'>Whales and darkness moving from cattle</p>
                            <h6 className='box-price'>800 Taka</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box-btn'>
                <a className='food-menu-btn' href="">See All Food</a>
            </div>
        </div>
    );
};

export default FoodMenu;