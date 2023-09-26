import React, { useEffect, useState } from 'react';
import Subtitle from '../../Shared/Subtitle/Subtitle';
import Menucard from '../../Shared/Menucard/Menucard';
import usemenu from '../../../Hooks/usemenu';


const Menu = () => {
    const [menu]=usemenu()
    const [show,setshow]=useState(true)
    return (
        <div className='my-[30px]'>
            <Subtitle heading={"---Check it out---"} subheading={"FROM OUR MENU"}></Subtitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {menu.slice(0,show ? 6:57).map(item=><Menucard items={item} key={item._id}></Menucard>)}
            </div>
            <button onClick={()=>setshow(false)} className='btn border-b-4 mt-4 flex justify-center mx-auto btn-primary btn-outline'>View Full  Menu</button>
        </div>
    );
};

export default Menu;