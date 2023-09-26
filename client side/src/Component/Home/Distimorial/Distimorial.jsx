import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import Subtitle from '../../Shared/Subtitle/Subtitle';
// how to rating use
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Distimorial = () => {
    const [review,setreview]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/review")
        .then(res=>res.json())
        .then(data=>setreview(data))
    },[])
    return (
        <div className='my-[30px]'>
            <Subtitle heading={"---What Our Clients Say---"} subheading={"TESTIMONIALS"}></Subtitle>
            {/* distimorial all items */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {review.map(allreview => <SwiperSlide key={allreview._id} className="flex flex-col items-center p-[20px] text-center">
                    <Rating
                        style={{ maxWidth: 180}}
                        value={allreview.rating}
                        readOnly
                    />
                  <p>{allreview.details}</p>
                  <h1 className="text-3xl font-semibold">{allreview.name}</h1>
               </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Distimorial;