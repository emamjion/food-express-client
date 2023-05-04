import React from "react";
import './ViewRecipeDetails.css';
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from "react-rating";

const ViewRecipeDetails = ({ rec }) => {
  const { recipeImg, recipeName, ingredients, cookingMethod, rating } = rec;
  
  const handleFavBtn = () => {
    toast("This Recipe is My Favourite");
    
  }
  
  return (
    <div>
      <div className="recipe">
        <div className="recipe-content">
          <div className="recipe-img">
            <img src={recipeImg} />
          </div>
          <div className="recipe-text">
            <h4 className="recipe-title">{recipeName}</h4>
            <div>
                <h4>Ingredients</h4>
                <p className="recipe-desc">{ingredients}</p>
            </div>
            <div>
                <h4 className="">Cooking Method</h4>
                <p>{cookingMethod}</p>
            </div>
            <div className="rating">
              <span>
              <Rating
                placeholderRating={rating}
                readonly
                emptySymbol={ < FaRegStar /> }
              placeholderSymbol={ < FaStar className="text-warning" />  }
              fullSymbol={ < FaStar /> }
              />
              </span>
              <span className="rating-text">{rating}</span>
            </div>
            <div className="favourite-btn-box">
                <button onClick={handleFavBtn} className="fav-btn"> <span> < FaHeart /> </span> <span>Favourite</span></button>
                <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipeDetails;
