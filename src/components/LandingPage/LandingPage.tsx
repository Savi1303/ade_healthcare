/* eslint-disable react-hooks/exhaustive-deps */
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
            homeView: document.getElementById('homeView'),
            visitInfo: document.getElementById('visitInfo'),
            service: document.getElementById('service'),
            yourHealth: document.getElementById('yourHealth'),
            prettyHealth: document.getElementById('prettyHealth'),
            blog: document.getElementById('blog'),
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
        <div className="overflow-hidden">
            <div id="homeView" className={`${visibleSections.homeView ? 'animate__animated animate__fadeIn' : ''}`}>
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
            <div id="prettyHealth" className={`${visibleSections.prettyHealth ? 'animate__animated animate__backInLeft' : ''}`}>
                <PrettyHealth />
            </div>
            <div id="blog" className={`${visibleSections.blog ? 'animate__animated animate__backInRight' : ''}`}>
                <Blog />
            </div>
        </div>
    );
};

export default LandingPage;