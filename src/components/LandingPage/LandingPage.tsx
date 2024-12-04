/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import HomeView from './HomeView/HomeView';
import VisitInfo from './VisitInfo/VisitInfo';
import Service from './Servicess/Service';
import YourHealth from './YourHealth/YourHealth';
import PrettyHealth from './PrettyHealth/PrettyHealth';
import Blog from './Blog/Blog';

const LandingPage = () => {
    

    return (
        <div className="overflow-hidden">
            <div>
                <HomeView />
            </div>
            <div>
                <VisitInfo />
            </div>
            <div>
                <Service />
            </div>
            <div>
                <YourHealth />
            </div>
            <div>
                <PrettyHealth />
            </div>
            <div >
                <Blog />
            </div>
        </div>
    );
};

export default LandingPage;