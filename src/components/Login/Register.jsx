import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { updateProfile } from 'firebase/auth';
const Register = () => {
    
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [error, setError] = useState("")
    
    
    const { createUser, updateUser,setReload } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/login";
    
    const handleRegister = event => {
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(photo)
        
        // console.log(name, photo, email, password)
        
        if(password.length < 6){
            setError("Please add at least 6  characters")
        }
        else{
            setPasswordError("")
        }
        
        
        createUser(email, password)
        .then((result) => {
           
            const createdUser = result.user;
            console.log(createdUser)
            updateUser(name,photo)
            .then(()=>{
                setReload(Date.now())
                
            })
            setError("");
            form.reset();
            toast.success('🦄 register done!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                
                navigate(from, {replace: true})
            
          })
          .catch((error) => {
           console.log(error.message)
        //    setError(error.message)
           
           toast.error('🦄 register failed!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          });
    }
    
    const handlePassword = event =>{
        const passwordInput = event.target.value;
        setPassword(passwordInput);
        if(passwordInput.length < 6 ){
            setPasswordError("password must be 6 characters")
            
        }
        
        else{
            setPasswordError("")
        }
    }
    
    return (
        
             <div className='my-12 '>
            <h1 className='mb-5 text-4xl font-semibold text-center'>Please Register Account</h1>
           
           
         <div className='h-full p-5 mx-auto border-2 border-indigo-600 border-solid rounded-lg md:w-2/5 bg-slate-400'>
            
            <form onSubmit={handleRegister} action="">
            <h1 className='text-xl font-semibold'>Name :</h1>
            
                <input className='px-5 py-2 my-3 border rounded-lg md:w-3/5 border-stone-500' name='name' type="text" placeholder='Enter Name' required /><br />
                
                <h1 className='text-xl font-semibold'>Email :</h1>
                
                <input className='px-5 py-2 my-3 border rounded-lg md:w-3/5 border-stone-500' name='email' type="email" placeholder='Enter Email' required/> <br />
                
                <h1 className='text-xl font-semibold'>Password :</h1>
                
                
               
               <input onChange={handlePassword}  className='px-5 py-2 my-3 border rounded-lg md:w-3/5 border-stone-500'  
               name='password' type="password" id='password' value={password}  placeholder='Enter password'   required/> <br />
               {
                passwordError && <span className='text-blue-700'>{passwordError}</span>
               }
             
              
                
                <h1 className='text-xl font-semibold'>Photo URL :</h1>
                
                <input className='px-5 py-2 my-3 border rounded-lg md:w-3/5 border-stone-500' name='photo' type="text" placeholder='Enter Photo url' required/>
                
              <div>
              <button className='px-5 py-2 my-3 text-xl font-semibold bg-orange-400 border rounded-lg md:w-3/5 border-stone-500'>Register</button>
              </div>
            </form>
            <div>
                <h1 className='text-xl'>Already Have an Account ?<Link to='/login' state={location.state}> <span className='text-blue-700'>Login</span></Link></h1>
                <h1 className='text-blue-700'>{error}</h1>
                </div>
                
         </div>
         <ToastContainer />
        </div>
       
    );
};

export default Register;