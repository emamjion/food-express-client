import React, { useEffect, useState } from 'react';
import './ChefSection.css';
import Chef from '../Chef/Chef';


const ChefSection = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://food-express-server-emamjion.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div className='chef-section'>
            <div className='text-center'>
                <h3 className='chefs-sub-title'>Hero</h3>
                <h2 className='chefs-title'>Our Honerable Chefs</h2>
            </div>
            <div className='chefs-content'>
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    >

                    </Chef>)
                }
            </div>
        </div>
    );
};

export default ChefSection;