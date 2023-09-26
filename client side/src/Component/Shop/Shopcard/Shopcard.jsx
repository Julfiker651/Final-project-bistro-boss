import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Hooks/useFirebase';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useCarts from '../../../Hooks/useCarts';

const Shopcard = ({ orders }) => {
    const { image, name, recipe, price, _id } = orders
    const [user] = useAuthState(auth) || {}
    const navigate=useNavigate()
    const location=useLocation()
    const [,refetch]=useCarts()
    const handlecart = async () => {
        const cartdata = { orderid: _id, image, name, recipe, price, email: user?.email }
        if (user) {
            const { data } = await axios.post('http://localhost:3000/carts', cartdata)
            if (data.insertedId) {
                refetch() //you headers item cart update scrial by scrial 
                Swal.fire({
                    // position: 'top-end',
                    icon: 'success',
                    title: 'Your Order Successfull',
                    showConfirmButton: true,
                    timer: 1500
                })
            }
        } else {
            Swal.fire({
                title: 'Are you not login',
                text: "Please login, clik here login button",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please Login!!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state:{from:location} })
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 m-auto shadow-xl">
            <figure className='relative'>
                <img src={image} alt="Shoes" />
                <h1 className='absolute top-3 right-3 bg-black py-1 px-3 rounded-md'>${price}</h1>
            </figure>
            <div className='pb-2 rounded-b-md text-center'>
                <h1>{name}</h1>
                <p>{recipe}</p>
                <button onClick={() => handlecart()} className='btn border-b-4 mt-4  btn-secondary btn-outline'>ADD TO CARD</button>
            </div>
        </div>
    );
};

export default Shopcard;