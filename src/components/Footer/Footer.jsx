import React from 'react';
import { FaFacebook, FaTwitterSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        
            <div className='bg-slate-900 text-slate-200'>
                <p className='text-xl text-center text-slate-300'>This cheif recipe footer copyright by nahid 2023</p>
                <div className='grid grid-cols-2 gap-5 p-5 md:grid-cols-5'>
                    
                  <div className='space-y-4'>
                    <h1 className='text-2xl'>Cheif Recipe</h1>
                    <div className='space-y-2 text-sm text-slate-300'>
                <p>Teardowm</p>
                <p>News</p>
                <p>About us</p>
                <p>Contact us</p>
                <p>Terms of Use</p>
                </div>
                    </div> 
                     
                  <div className='space-y-4'>
                  <h1 className='text-2xl'>Social</h1>
                  <div className='space-y-2 text-sm text-slate-300'>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Youtube</p>
                </div>
                <div className='flex items-center gap-4'>
                <FaFacebook className='h-7 w-7'/>
                <FaTwitterSquare className='h-7 w-7'/>
                <FaYoutube className='h-9 w-9'/>
                </div>
                    </div>  
                    
                  <div className='space-y-4'>
                  <h1 className='text-2xl'>Service</h1>
                  <div className='space-y-2 text-sm text-slate-300'>
                <p>Compare</p>
                <p>Download</p>
                <p>Feedback</p>
                <p>Food Report</p>
                </div>
                    </div> 
                     
                  <div className='space-y-4'>
                  <h1 className='text-2xl'>Activity</h1>
                  <div className='space-y-2 text-sm text-slate-300'>
                <p>Influncers</p>
                <p>Honor</p>
                <p>Giveaway</p>
                </div>
                    </div>  
                    
                    <div className='space-y-4'>
                <h1 className='text-2xl '>Contact</h1>
                <div className='space-y-2 text-sm text-slate-300'>
                    <p>524 Broadway , NYC</p>
                    <p>+1706-848-010</p>
                </div>
            </div>
                    
                    
                    
                    
                </div>
            </div>
            
       
        
    );
};

export default Footer;<p className="">© My Recipe Blog 2023</p>