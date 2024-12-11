import React from 'react'
import AboutHome from './AboutHome/AboutHome'
import OurStory from './OurStory/OurStory'
import Blog from '../LandingPage/Blog/Blog'
import YourHealth from '../LandingPage/YourHealth/YourHealth'
import AboutService from './AboutService/AboutService'

const About = () => {
  return (
    <div>
      <AboutHome />
      <OurStory />
      <AboutService />
      <Blog />
      <YourHealth />
    </div>
  )
}

export default About