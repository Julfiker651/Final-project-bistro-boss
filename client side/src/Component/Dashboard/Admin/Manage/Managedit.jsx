import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Subtitle from '../../../Shared/Subtitle/Subtitle';

const Managedit = () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const [editfood,seteditfood]=useState([])
    const {eid}=useParams()
    // get foods axiso
     const getfoods=async()=>{
      const {data}= await axios.get(`http://localhost:3000/foods/${eid}`)
       seteditfood(data)
     }
    //  useEffect get foods for our call by the item
     useEffect(()=>{
        getfoods()
     },[])
// console.log(editfood)
    const onSubmit = data =>{
        console.log(data)
    }
    return (
        <div>
            {/* how to header */}
            <Subtitle heading={"---What's new?---"} subheading={"UPDATE AN ITEM"}></Subtitle>
           <form className='space-y-2' onSubmit={handleSubmit(onSubmit)}>
                <h1>Name</h1>
                <input  {...register("name")} name={editfood.name} defaultValue={editfood ? editfood.name :""} placeholder="Name" className="input input-bordered input-secondary w-full" />
                <div className='lg:flex w-full gap-2'>
                    <div className='lg:w-1/2'>
                        <h1>Category*</h1>
                        <select className="select select-primary w-full" {...register("category")}>
                            <option disabled selected>select category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>
                    <div className='lg:w-1/2'>
                        <h1>Price</h1>
                        <input {...register("price")} placeholder="Price" className="input input-bordered input-secondary w-full" />
                    </div>
                </div>
                <h1>Recipe Details*</h1>
                <textarea {...register("recipe")} className="textarea textarea-secondary w-full h-[150px]" placeholder="datails"></textarea>
                <input type="file" {...register("image")} className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
               <h1><button className='btn btn-primary'>Add Item</button></h1>
            </form>  
        </div>
    );
};

export default Managedit;