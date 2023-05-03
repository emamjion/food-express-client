import React from 'react';
import './Home.css';
import bannerImg from '../../assets/images/hero.png'
import About from '../About/About';
import FoodMenu from '../FoodMenu/FoodMenu';
import ChefSection from '../ChefSection/ChefSection';

const Home = () => {
    return (
        <div className=''>
            {/* Banner Part */}
            <section className='banner-section'>
                <div className='banner-text'>
                    <h3 className='banner-sub-title'>Welcome!</h3>
                    <h1 className='banner-title'>Enjoy The Bangladeshi Food</h1>
                    <p className='banner-desc'>
                        Bangladeshi cuisine is the national cuisine of Bangladesh. <br/> It has been shaped by the region's history and river-line geography. <br/> The country has a tropical monsoon climate. The staple of Bangladesh is rice and fish.
                    </p>
                    <a className='about-btn' href="">About Us</a>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} />
                </div>
            </section>
            
            {/* About section */}
            <section>
                <About/>
            </section>

            {/* Food Menu section*/}
            <section>
                <FoodMenu/>
            </section>

            {/* Chef Section */}
            <section>
                <ChefSection/>
            </section>

        </div>
    );
};

export default Home;