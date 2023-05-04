import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefDetails.css';
import ViewRecipe from '../ViewRecipe/ViewRecipe';

const ChefDetails = () => {
    const {id} = useParams();
    const viewChefDetails = useLoaderData();
    return (
        <div className='chefDetails-section'>
            <h2 className='text-center'>The Chef's Serial : {id}</h2>
            <div>
                {
                    viewChefDetails.map(viewDetails => <ViewRecipe
                        key={viewDetails.id}
                        viewDetails={viewDetails}
                    >

                    </ViewRecipe>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;