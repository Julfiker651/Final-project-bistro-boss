import React from 'react';
import chef from '../../../assets/home/chef-service.jpg'

const Distro = () => {
    return (
        <div className='my-[30px]'>
           <div className='relative'>
           <img src={chef} alt="" />
           <div className='absolute top-1/2 left-1/2 translate-middle'>
             <div className='bg-[#2274aa] text-center w-screen lg:w-[800px] h-fit overflow-hidden  p-10 rounded-md'>
             <h1 className='text-3xl'>Bistro Boss</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
             </div>
           </div>
           </div>
        </div>
    );
};

export default Distro;