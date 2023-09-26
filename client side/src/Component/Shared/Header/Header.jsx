import React, { useContext, useState } from 'react';
import { FcManager } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Hooks/useFirebase';
import { useSignOut } from 'react-firebase-hooks/auth';
import useCarts from '../../../Hooks/useCarts';

const Header = () => {
    const [user] = useAuthState(auth);
    const [profile,setprofile]=useState(false)
    const [signOut] = useSignOut(auth);
    const [cart]=useCarts()
  const content = <>
    <li><Link to="/">Home</Link></li>
    <li><a>CONTACT US</a></li>
    <li><Link>DASHBOARD</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/shop/dessert">Shop</Link></li>
    {user ? <li><Link to="/dasboard">Carts<span className="indicator-item bg-[red] text-white badge">{cart.length || 0}</span></Link> </li>:null}
    <li><a>Our Shop</a></li>
    <li>{user ? <img onClick={()=>setprofile(!profile)} className='w-[73px] h-[57px] rounded-[100%] relative' src={user?.photoURL} alt="" /> : <Link to="/login">Login <FcManager size={25} /> </Link>}
    {/* profile section log out and  very easy */}
     {profile &&  <div className='absolute !cursor-auto top-[54px] -left-[45px] flex flex-col w-[180px] h-fit p-4 bg-[#1284b5] hover:!bg-[#1284b5] hover:!text-white'>
    <img className='w-[150px] h-[130px] rounded-[100%]' src={user?.photoURL}/>
      <h1 className='capitalize'>{user?.displayName}</h1>
     <button 
     onClick={async()=>{
      await signOut()
      localStorage.removeItem('token')
      setprofile(!profile)
     }} 
     className='btn btn-success cursor-pointer capitalize'>Log out</button>
    </div>}
    </li>
    
  </>
   
  return (
    <div className='max-w-7xl mx-auto sticky  top-0 left-0 z-50'>
      <div className="navbar bg-[#0b6f83] lg:bg-[#0000005c] max-w-7xl lg:fixed  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu uppercase bg-[#1fa7b9] h-screen  rounded-none w-[200px] menu-sm dropdown-content mt-3 p-2 shadow">
              {content}
            </ul>
          </div>
          <h1 className='text-xl font-bold lg:font-semibold'>BISTRO BOSSM<br /><span className='lg:tracking-[.2em]'>Restaurant</span></h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1 items-center uppercase">
            {content}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;