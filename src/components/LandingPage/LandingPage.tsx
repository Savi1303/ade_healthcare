import React, { useEffect, useState } from 'react';
import HomeView from './HomeView/HomeView';
import VisitInfo from './VisitInfo/VisitInfo';
import Service from './Servicess/Service';
import YourHealth from './YourHealth/YourHealth';
import PrettyHealth from './PrettyHealth/PrettyHealth';
import Blog from './Blog/Blog';

const LandingPage = () => {
    const [visibleSections, setVisibleSections] = useState({
        homeView: false,
        visitInfo: false,
        service: false,
        yourHealth: false,
        prettyHealth: false,
        blog: false,
    });

    const handleScroll = () => {
        const sections = {
            visitInfo: document.getElementById('visitInfo'),
            service: document.getElementById('service'),
            yourHealth: document.getElementById('yourHealth'),
        };

        const windowHeight = window.innerHeight;
        const newVisibility = { ...visibleSections };
        for (const [key, section] of Object.entries(sections) as Array<[keyof typeof visibleSections, HTMLElement | null]>) {
            const rect = section?.getBoundingClientRect();
            if (rect && rect.top <= windowHeight && rect.bottom >= 0) {
                newVisibility[key] = true;
            } else {
                newVisibility[key] = false;
            }
        }
        setVisibleSections(newVisibility);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div id="homeView" >
                <HomeView />
            </div>
            <div id="visitInfo" className={`${visibleSections.visitInfo ? 'animate__animated animate__backInRight' : ''}`}>
                <VisitInfo />
            </div>
            <div id="service" className={`${visibleSections.service ? 'animate__animated animate__backInLeft' : ''}`}>
                <Service />
            </div>
            <div id="yourHealth" className={`${visibleSections.yourHealth ? 'animate__animated animate__backInRight' : ''}`}>
                <YourHealth />
            </div>
            <div id="prettyHealth">
                <PrettyHealth />
            </div>
            <div id="blog">
                <Blog />
            </div>
        </div>
    );
};

export default LandingPage;