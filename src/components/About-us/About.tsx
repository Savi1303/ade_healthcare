import React from 'react'
import AboutHome from './AboutHome/AboutHome'
import OurStory from './OurStory/OurStory'
import Blog from '../LandingPage/Blog/Blog'
import Service from '../LandingPage/Servicess/Service'
import AboutHealth from './AboutHealth/AboutHealth'
// import AboutService from './AboutService/AboutService'

const About = () => {
  return (
    <div>
      <AboutHome />
      <OurStory />
      {/* <AboutService /> */}
      <Service />
      <Blog />
      <AboutHealth />
    </div>
  )
}

export default About