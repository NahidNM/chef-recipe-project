import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate, useLocation,  Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn, user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    
    const [ showUser, setShowUser] = useState("")
    const [error, setError] = useState("")
    
    const from = location.state?.from?.pathname || "/";
    
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //  form.reset();
        console.log(email, password)
        
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setShowUser(loggedUser)
            setError('')
            navigate(from, {replace: true})
            form.reset();
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }
    
    const handleGoogleSignIn = () =>{
       
        googleSignIn()
        .then(result =>{
            const googleUser = result.user;
            console.log(googleUser)
            // setShowUser(googleUser)
            navigate(from, {replace: true})
            
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    const handleGithubSignIn = () =>{
       
        githubSignIn()
        .then(result =>{
            const githubUser = result.user;
            console.log(githubUser)
            navigate(from, {replace: true})
          
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    
    
    return (
        <div className='my-12 '>
            <h1 className='mb-5 text-4xl font-semibold text-center'>Please Login</h1>
           <h1>{showUser}</h1>
         <div className='h-full p-5 mx-auto border-2 border-indigo-600 border-solid rounded-lg md:w-2/5 bg-slate-400'>
            
            <form onSubmit={handleLogin} action="">
                <h1 className='text-xl font-semibold'>Email :</h1>
                
                <input className='px-5 py-2 my-3 border rounded-lg md:w-3/5 border-stone-500'name='email' type="email" placeholder='Enter Email' required/> <br />
                
                <h1 className='text-xl font-semibold'>Password :</h1>
                
                <input className='px-5 py-2 my-3 border rounded-lg md:w-3/5 border-stone-500'name='password' type="password" placeholder='Enter password' required/>
                
              <div>
              <button className='px-5 py-2 my-3 text-xl font-semibold bg-orange-400 border rounded-lg md:w-3/5 border-stone-500'>Login</button>
              </div>
            </form>
            <div>
                <h1 className='text-xl'>Don't Have an Account ?<Link to='/register' state={location.state}> <span className='text-blue-700'>Register</span></Link></h1>
                <h1 className='text-blue-700'>{error}</h1>
                </div>
                <div>
                    <h1 className='mb-4 text-2xl font-semibold text-center mt-7'>Login With</h1>
                    
                    <div className='items-center gap-4 my-2 md:flex'>
                        
                    <button onClick={handleGoogleSignIn} className='flex items-center gap-2 px-3 py-1 my-2 text-xl font-semibold text-blue-700 bg-white border rounded-lg border-zincflex'><FaGoogle  /> Loing With Google</button>
                    
                    <button onClick={handleGithubSignIn} className='flex items-center gap-2 px-3 py-1 text-xl font-semibold bg-white border rounded-lg text-sky-600 border-zincflex'><FaGithub/> Loing With github</button>
                    
                    </div>
            
                </div>
         </div>
       
        </div>
    );
};

export default Login;