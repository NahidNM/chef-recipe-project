import React from 'react';
import {  FaRegStar, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeDetails = (props) => {
    
    const {author, id, image, ingredients, name, ratings, steps} = props.recipeDetails;
    
    const [buttonClick, setButtonClick] = useState(false)
    
           
    const handeFavarite = () => {
        setButtonClick(true )
        toast.success('🦄 Favarite recipe added!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    
    return (
        <div className='gap-3 p-5 border-4 border-red-400 rounded-lg bg-slate-200'>
          
            <img className='w-full h-64'  src={image} alt="" /> 
             <h1 className='my-3 text-2xl font-semibold'>Recipe Name : {name}</h1>
             <p><span className='text-xl font-semibold'>Ingredients :</span> {ingredients}</p>
             <p><span className='text-xl font-semibold'>Method :</span> {steps}</p>
             
             <div className='flex items-center my-3'>
                
             <Rating
                        style={{ maxWidth: 150 }}
                        value={(ratings || 0)} readOnly />
                <span className='ml-2'>{ratings}</span>
             </div>
            
             <button onClick={handeFavarite} disabled={buttonClick}  className={`${buttonClick ? "bg-blue-400" : " bg-blue-700"}  px-3 py-1 mt-8 text-xl font-semibold border rounded-lg w-80 border-stone-500 text-gray-950 `}>Favorite recipe</button>
             <ToastContainer />
        </div>
    );
};

export default RecipeDetails;