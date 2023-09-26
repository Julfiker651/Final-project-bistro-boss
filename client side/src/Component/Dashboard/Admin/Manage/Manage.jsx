import React, { useEffect, useState } from 'react';
import Subtitle from '../../../Shared/Subtitle/Subtitle';
import Managecard from './Managecard';
import axios from 'axios';
import useFoods from '../../../../Hooks/useFoods';
import Swal from 'sweetalert2'

const Manage = () => {
    const [foods,refetch]=useFoods()
// hanlde delete
const handledelete=async(delete_id)=>{
    Swal.fire({
        title: 'Are you sure!! Delete',
        text: "How to click your delete button for you",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:3000/foods/${delete_id}`)
            .then(result=>{
                if(result.data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your item has been deleted successfull.',
                        'success'
                      )
                }
            })
        }
      })
}


    return (
        <div>
            <Subtitle heading={"---Hurry Up!---"} subheading={"MANAGE ALL ITEMS"}></Subtitle>
            <h1 className='text-3xl font-semibold'>Total items:{foods.length}</h1>
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr className='uppercase text-[17px]'>
                            <th>SCRIAL</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTIOLN</th>
                            <th>ACTIOLN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map((data,index)=> <Managecard key={index} handledelete={handledelete}  scrial={index} foodsitem={data}></Managecard>)}
                    </tbody>
                </table>
        </div>
    );
};

export default Manage;