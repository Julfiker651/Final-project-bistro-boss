import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCarts from '../../../Hooks/useCarts';
import Subtitle from '../../Shared/Subtitle/Subtitle';
import Mytd from './Mytd';

// MdDeleteForever

const Mycart = () => {
    const [cart] = useCarts()
    // total price
    const total1 = cart?.map(x => parseInt(x.price)).reduce((pv, cv) => pv + cv, 0)
    // console.log(cart)

    return (
        <div>
            {/* helment */}
            <Helmet>
                <title>Bistro || Mycart</title>
            </Helmet>
            <Subtitle heading={"---My Cart---"} subheading={"WANNA ADD MORE?"}></Subtitle>
            <div className='bg-[#2f3843] p-5 rounded-lg'>
                <div className='flex justify-between  py-4 text-xl lg:text-4xl capitalize font-semibold'>
                <h1>Total orders:{cart?.length}</h1>
                <h1>total price:${total1}</h1>
                <h1><button className='btn btn-sm btn-primary'>PAY</button></h1>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='uppercase text-[17px]'>
                                <th>Scrial</th>
                                <th>Tiem Image</th>
                                <th>Tiem Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {cart.map((items,index)=><Mytd key={items._id} index={index} item={items}></Mytd>)}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Mycart;