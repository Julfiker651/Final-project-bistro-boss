import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Hooks/useFirebase';
import axios from 'axios';
import { jwt } from '../../Shared/Jwt/Jwt';


const Register = () => {
    const [name,setname]=useState('')
    const [photo,setphoto]=useState('')
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')
    const [createUserWithEmailAndPassword,error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const navigate=useNavigate()
    //   reset
    const reset=()=>{
        setname('');
        setemail('');
        setpass('');
    }
    //   hanlde from 
    const handlefrom=async(e)=>{
        e.preventDefault()
            await createUserWithEmailAndPassword(email, pass);
            await updateProfile({ displayName: name, photoURL: photo });
            await axios.post('http://localhost:3000/users', { name, email, photo });
            // assestoken set 
            jwt(email)
            // assentoken end
            navigate('/');
            reset();
    }
     

    return (
        <div className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="font-bold text-3xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Please Regiter
              </h1>
              <form onSubmit={handlefrom} className="space-y-4 md:space-y-6">
              <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input onChange={(e)=>setname(e.target.value)} type="text" value={name} name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required={true}/>
                  </div>
                  <div>
                      <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo</label>
                      <input onChange={(e)=>setphoto(e.target.value)} type="text" value={photo} name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Photo" required={true}/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={(e)=>setemail(e.target.value)} type="email" value={email} name="email"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="demo@gmail.com" required={true}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={(e)=>setpass(e.target.value)} value={pass} type="password" name="password" id="password" placeholder="password type here" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}/>
                  </div>
                  
                  <button  type="submit" className={`w-full text-white bg-[#0e6f80] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}>Sign in</button>
              </form>
              <div className='text-center'>
                 {/* start */}
                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already Have a account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                  </p>
                 {/* end */}
              </div>
          </div>
      </div>
  </div>
</div>
    );
};


export default Register;