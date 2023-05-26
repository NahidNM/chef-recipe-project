import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CheifData from './CheifData';
import dishert from './../../../public/img/dishert.jpeg'
import dishes from './../../../public/img/hot dishes.jpeg'
import vege from './../../../public/img/vegetarian.jpeg'
import drinks from './../../../public/img/drinks.png'
import Addition from './Addition';



const Cheif = () => {
   const [cheifs, setCheifs] = useState([])
   
  useEffect(()=>{
    fetch('https://chef-recipe-hunter-server-nahidnm.vercel.app/cheif')
    .then(res => res.json())
    .then(data => setCheifs(data))
    .catch(error => console.error(error))
  },[])

    return (
        <div className='my-10'>
            <h4 className='p-3 mx-2 text-3xl font-bold text-center rounded-lg md:mx-auto md:w-3/5 text-slate-600 bg-cyan-500'> The Chefs Who Are Best at Their Own Way</h4>
           <div className='grid items-center grid-cols-1 gap-5 p-5 md:mx-10 lg:grid-cols-3 md:grid-cols-2'>
            {
               cheifs && cheifs.map(cheifData => <CheifData key = {cheifData.id}
                cheifData ={cheifData}></CheifData>
            )}
            
           </div>
           
         {/* second section */}
         
          <div className='md:my-10'>
          <h1 className='text-3xl font-bold text-center'>Some Recipe Items</h1>
          <section className='grid w-3/4 grid-cols-2 mx-auto my-5 space-y-3 md:grid-cols-4'>
           
           <div className=''>
             <img className='h-40' src={dishert} alt="" />
             <h1 className='my-5 ml-10'>HOT DISHES</h1>
             <p className='my-5 ml-10 text-5xl text-zinc-500'>98</p>
           </div>
           <div>
           <img className='h-40' src={dishes} alt="" />
           <h1  className='my-5 ml-10'>DESSERT</h1>
           <p className='my-5 ml-10 text-5xl text-zinc-500'>78</p>
           </div>
           <div>
           <img className='h-40' src={vege} alt="" />
           <h1  className='my-5 ml-10'>VEGETARIAN</h1>
           <p className='my-5 ml-10 text-5xl text-zinc-500'>80</p>
           </div>
           <div>
           <img className='h-40' src={drinks} alt="" />
           <h1  className='my-5 ml-10'>DRINKS</h1>
           <p className='my-5 ml-10 text-5xl text-zinc-500'>68</p>
           </div>
          </section>
          </div>
          
          {/* Third Section */}
          <Addition></Addition>
        </div>
    );
};

export default Cheif;