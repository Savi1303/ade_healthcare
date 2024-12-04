import React from 'react'
import HomeClinic from './HomeClinic/HomeClinic'
import WorkProcess from './WorkProcess/WorkProcess'
import Service from '../LandingPage/Servicess/Service'
import YourHealth from '../LandingPage/YourHealth/YourHealth'
import Blog from '../LandingPage/Blog/Blog'

function ClinicPage() {
    return (
        <div>
            <HomeClinic />
            <WorkProcess />
            <Service />
            <Blog />
            <YourHealth />
        </div>
    )
}

export default ClinicPage