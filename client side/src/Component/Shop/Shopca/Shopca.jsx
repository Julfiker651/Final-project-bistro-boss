import React from 'react';
import Shopcard from '../Shopcard/Shopcard';

const Shopca = ({order}) => {
    return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                {order.map(order=><Shopcard orders={order} key={order._id}></Shopcard>)}
            </div>  
    );
};

export default Shopca;