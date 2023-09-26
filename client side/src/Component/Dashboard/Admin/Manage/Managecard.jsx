import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Managecard = ({foodsitem,scrial,handledelete}) => {
    const navigate=useNavigate()
    const {_id,image,name,price}=foodsitem
    return (
        <tr>
            <th>
                <label>
                    {scrial+1}
                </label>
            </th>
            <td>
                <div className="flex items-center  justify-center space-x-3">
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
            <td onClick={()=>navigate(`/dasboard/editmanage/${_id}`)}><h1 className='flex justify-center cursor-pointer'><FiEdit color='red' size={25}/></h1></td>
            <th onClick={()=>handledelete(_id)}><h1 className='flex justify-center cursor-pointer'><AiFillDelete color='green'  size={25}/></h1></th>
        </tr>
    );
};

export default Managecard;