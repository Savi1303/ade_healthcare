import React from 'react'
import HomeClinic from './HomeClinic/HomeClinic'
import WorkProcess from './WorkProcess/WorkProcess'
// import Service from '../LandingPage/Servicess/Service'
// import YourHealth from '../LandingPage/YourHealth/YourHealth'
import Blog from '../LandingPage/Blog/Blog'
import AboutService from '../About-us/AboutService/AboutService'
import ClinicHealth from './ClinicHealth/ClinicHealth'

function ClinicPage() {
    return (
        <div>
            <HomeClinic />
            <WorkProcess />
            {/* <Service /> */}
            <AboutService />
            <Blog />
            {/* <YourHealth /> */}
            <ClinicHealth />
        </div>
    )
}

export default ClinicPage