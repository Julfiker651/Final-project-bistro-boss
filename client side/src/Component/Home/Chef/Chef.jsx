import React from 'react';
import Subtitle from '../../Shared/Subtitle/Subtitle';
import Chefcard from './Chefcard';

const Chef = () => {
    return (
        <div>
           <Subtitle heading={"---Should Try---"} subheading={"CHEF RECOMMENDS"}></Subtitle>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-9'>
          <Chefcard></Chefcard>
           <Chefcard></Chefcard>
           <Chefcard></Chefcard>
          </div>

        </div>
    );
};

export default Chef;