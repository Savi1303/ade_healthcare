import React from 'react'
import HomeView from './HomeView/HomeView'
import VisitInfo from './VisitInfo/VisitInfo'
import Service from './Servicess/Service'
import YourHealth from './YourHealth/YourHealth'
import PrettyHealth from './PrettyHealth/PrettyHealth'
import Blog from './Blog/Blog'

const LandingPage:React.FC = () => {
    return (
        <div>
            <HomeView />
            <VisitInfo />
            <Service />
            <YourHealth />
            <PrettyHealth />
            <Blog />
        </div>
    )
}

export default LandingPage