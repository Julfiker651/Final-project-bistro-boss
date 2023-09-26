import React, { useState } from 'react';
import featured from '../../../assets/home/featured.jpg'
import './Fromour.css'
import Subtitle from '../../Shared/Subtitle/Subtitle';


const Fromour = () => {
    const [show,setshow]=useState(false)
    return (
        <div className='bannerimg my-[30px]'>
            <Subtitle heading={"---Check it out---"} subheading={"FROM OUR MENU"}></Subtitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 text-white'>
                <img className='w-[400px] m-auto rounded-md' src={featured} alt="" />
                <div className='text-center lg:text-left'>
                    <h1>March 20, 2023</h1>
                    <h2 className='text-2xl'>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    {show && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, consequatur aliquam eaque eligendi exercitationem impedit libero repellat. Reprehenderit, laborum fugit?</p>}
                    
                    <button onClick={()=>setshow(!show)} className="btn border-b-4 mt-4 btn-warning btn-outline">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Fromour;