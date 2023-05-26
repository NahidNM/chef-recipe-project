import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import { useEffect, useState } from 'react';


const Recipe = () => {
    const {name} = useParams();
    const recipeData = useLoaderData();
    // console.log(recipeData)
    console.log(name)
    
    const [ master , setMaster] = useState([])
    console.log(master)
    
    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-nahidnm.vercel.app/cheif')
        .then(res => res.json())
        .then(data => setMaster(data?.find(chefMaster => chefMaster.name == name)))
        .catch(error => console.error(error))
      },[])
    
    
    return (
        <div className='my-5 md:my-20'>
            <div className='flex gap-5 px-10 py-5 mx-auto rounded-lg md:w-3/5 bg-slate-400'>
                <div>
                <img className='rounded-lg  md:h-96 md:w-80'  src={master.img} alt="" />
                </div>
               <div className='mt-20 ml-20 space-y-3 font-semibold w-72'>
               <h1> <span className='text-xl font-semibold text-stone-950'>Name : </span>
                {master.name}</h1>
               <p> <span className='text-xl font-semibold text-stone-950'>Age : </span>{master.age}</p>
               <p> <span className='text-xl font-semibold text-stone-950'>Experience : </span>{master.experience}</p>
               <p> <span className='text-xl font-semibold text-stone-950'>Total Recipes : </span>{master.totalRecipes}</p>
               <p> <span className='text-xl font-semibold text-stone-950'>Total Likes : </span>{master.totalLikes}</p>
               <p><span className='text-xl font-semibold text-stone-950 w-72'>Bio</span> {master.bio}</p>
               </div>
               
            </div>
            
            <h1 className='mt-20 text-3xl font-semibold text-center'>Food Recipe Item And Method</h1>
            <div className='grid gap-10 md:my-10 lg:grid-cols-3 md:mx-10'>
                {
                   recipeData && recipeData.map(recipeDetails => <RecipeDetails 
                        key={recipeDetails.id }
                        recipeDetails={recipeDetails}
                        ></RecipeDetails>)
                }
            </div>
        </div>
    );
};

export default Recipe;<h1>Recipi</h1>