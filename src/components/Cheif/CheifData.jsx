import React from 'react';
import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazy-load';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CheifData = (props) => {
    // console.log(props.cheifData)
    const {name,age, img, experience, sex, totalLikes, totalRecipes,id} = props.cheifData;

    return (
        <div className='p-5 border rounded-lg border-amber-600 bg-zinc-300'>
          
       <LazyLoad effect='blur'>
            <img src={img} alt="feb 20" />
        </LazyLoad>
       
           <h1 className='my-3 text-2xl font-semibold'>Cheif Name : {name}</h1> 
           <div className='flex items-center justify-between space-y-3 text-xl font-semibold'>
            <div className='space-y-2'>
            <p>Age : {age}</p>
           <p>Sex : {sex}</p>
           <p>TotalLikes : {totalLikes}</p>
            </div>
            <div>
            <p>Experience : {experience}</p>
           <p>TotalRecipes : {totalRecipes}</p> 
           
           <Link to={`/cheif/${name}`} ><button className='px-3 py-1 mt-8 text-xl font-semibold bg-orange-400 border rounded-lg border-stone-500 hover:bg-orange-200'>View Recipe</button></Link>
           
            </div>
           </div>
        </div>
    );
};

export default CheifData;