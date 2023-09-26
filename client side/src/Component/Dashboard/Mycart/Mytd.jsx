import axios from 'axios';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2'
import useCarts from '../../../Hooks/useCarts';
const Mytd = ({item,index}) => {
    const {orderid,_id,image,name,price}=item
    const [,refetch]=useCarts()
    const hanldelete=(id)=>{
        Swal.fire({
          title: 'Are you sure?',
          text: "We are delete items",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Delete'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://localhost:3000/carts/${id}`)
            .then(result=> {
                if(result.data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })
          }
        })
    }
    return (
        <tr>
            <th>
                <label>
                    {index+1}
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>${price}</td>
            <th><h1 onClick={()=>hanldelete(orderid)} className='bg-[#5e7692] w-fit p-1 rounded-md cursor-pointer hover:text-[#2f639f]'><MdDeleteForever size={30} /></h1></th>
        </tr>

    );
};

export default Mytd;