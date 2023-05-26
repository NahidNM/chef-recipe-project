import React from 'react';
import Cheif from '../Cheif/Cheif';
import './Banner.css'
// import bnImag from './../../../public/img/hand-drawn-vector-abstract-modern-cartoon-cooking-studio-illustrations-recipe-card-planner-templete-food-food-blog-vegetables-115444512.jpg'

const Banner = () => {
   
    return (
        <div>
         <div className='baner'>
            <h1 className='px-20 text-4xl font-extrabold text-center  text-zinc-300 py-52'>Be in Touch With Your Most Favourite Master Chef <br /> <span className='text-slate-500'>And</span> <br/>Their Delicacy</h1>
            
        </div>
        
           <Cheif></Cheif>
           
        </div>
        
    );
};

export default Banner;