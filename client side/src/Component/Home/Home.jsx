import React from 'react';
import Banner from './Banner/Banner';
import Online from './Online/Online';
import Distro from './Distro/Distro';
import Menu from './Menu/Menu';
import Contect from './Contect/Contect';
import Chef from './Chef/Chef';
import Fromour from './Fromour/Fromour';
import Distimorial from './Distimorial/Distimorial';
import { Helmet} from 'react-helmet-async';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
          {/* halment */}
          <Helmet>
          <title>Bisro || Home</title>
         </Helmet>
          <Banner></Banner>
          <Online></Online>
          <Distro></Distro>
          <Menu></Menu>
          <Contect></Contect>
          <Chef></Chef>
          <Fromour></Fromour>
          <Distimorial></Distimorial>
        </div>
    );
};

export default Home;