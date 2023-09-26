import React from 'react';

const Subtitle = ({heading,subheading}) => {
    return (
        <div className='text-center w-fit m-auto my-[30px]'>
            <h1 className='text-xl text-[#D99904] py-2  border-b-2 border-[#0d6481]'>{heading}</h1>
            <h2 className='text-3xl text-black py-2  border-b-2 border-[#0d6481]'>{subheading}</h2>
        </div>
    );
};

export default Subtitle;