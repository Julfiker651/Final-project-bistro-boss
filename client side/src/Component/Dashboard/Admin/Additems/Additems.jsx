import React from 'react';
import Subtitle from '../../../Shared/Subtitle/Subtitle';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
const Additems = () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const imagtoken="a9c5fd1f85d201f5e1ece132fecc84e9"
    const fetch_url=`https://api.imgbb.com/1/upload?key=${imagtoken}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(fetch_url, {
            method: "POST",
            body: formData,
        })
        .then(res=>res.json())
        .then(imgdata=>{
            if(imgdata.success){
                data.image=imgdata.data.display_url
                data.price=parseFloat(data.price)
                axios.post('http://localhost:3000/foods',data)
                .then(data=>{
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    }
    return (
        <div>
            <Subtitle heading={"---What's new?---"} subheading={"ADD AN ITEM"}></Subtitle>
            <form className='space-y-2' onSubmit={handleSubmit(onSubmit)}>
                <h1>Name</h1>
                <input  {...register("name")} placeholder="Name" className="input input-bordered input-secondary w-full" />
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

export default Additems;