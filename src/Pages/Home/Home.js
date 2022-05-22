import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <BusinessSummary/>
        </div>
    );
};

export default Home;