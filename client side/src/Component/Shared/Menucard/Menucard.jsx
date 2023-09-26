import React from 'react';
import emo from '../../../assets/contact/emo.png'

const Menucard = ({items}) => {
    const {_id,category,image,name,price,recipe}=items
    return (
        <div className='flex space-x-2 items-center'>
         <img className='w-[70px] h-fit rounded-md ' src={image} alt="" />
         <div>
            <h1> {name} ----------- </h1>
             <p>{recipe}</p>
         </div>
         <h1 className='text-[yellow] mr-0'>${price}</h1>
        </div>
    );
};

export default Menucard;