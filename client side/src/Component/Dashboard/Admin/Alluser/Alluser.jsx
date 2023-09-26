import React from 'react';
import Subtitle from '../../../Shared/Subtitle/Subtitle';
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import axios from 'axios';
import Swal from 'sweetalert2'


const Alluser = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/users', {
                headers: {
                  authorization: `Bearer ${localStorage.getItem('token')}`,
                }
              })
            return res.json()
        }
    })
    // hanlde delete
    const hanldedelete=(duser)=>{
        console.log(duser)
    }
    // Handleadmitadd for data 
    const Handleadmitadd=async(user,role)=>{
      await axios.patch(`http://localhost:3000/users/admin/${user._id}`,{role:`${role}`})
      .then(result=>{
        if(result.data.modifiedCount > 0){
            refetch()
            // sweet alert control
          if(role === 'admin'){
            Swal.fire({
                icon: 'success',
                title: 'Your Admin Power Sucess',
                showConfirmButton: false,
                timer: 1500
              })
          }else{
            Swal.fire({
                icon: 'success',
                title: 'Your Admin Power Cancel',
                showConfirmButton: false,
                timer: 1500
              })
          }
        }
      })
    }
    return (
        <div>
            <Helmet>
                <title>Bistro || alluser</title>
            </Helmet>

            <Subtitle heading={"---How many??---"} subheading={"MANAGE ALL USERS"}></Subtitle>
            <div>
                <h1 className='text-xl lg:text-3xl py-4 font-semibold'>Total user : {users.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='capitalize text-[17px]'>
                                <th>Scrial</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* all user map data  */}
                          {users && users?.map((user,index)=> <tr key={index}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role === "admin" ? <button onClick={()=>Handleadmitadd(user,null)} className='bg-[#275983] p-1 rounded-md'>Admin</button> : <button onClick={()=>Handleadmitadd(user,'admin')} className='bg-[green] px-3 py-1 rounded-md'><AiOutlineUsergroupDelete size={20}/></button>}</td>
                                <th><h1 onClick={()=>hanldedelete(user)} className='bg-[#5e7692] w-fit p-1 rounded-md cursor-pointer hover:text-[#2f639f]'><MdDeleteForever size={30} /></h1></th>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Alluser;