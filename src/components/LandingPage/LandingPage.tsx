/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import HomeView from './HomeView/HomeView';
import Service from './Servicess/Service';
import YourHealth from './YourHealth/YourHealth';

const LandingPage = () => {
    

    return (
        <div className="overflow-hidden">
            <div>
                <HomeView />
            </div>
            <div>
                <Service />
            </div>
            <div>
                <YourHealth />
            </div>
        </div>
    );
};

export default LandingPage;