import React from 'react'
import AboutHome from './AboutHome/AboutHome'
import OurStory from './OurStory/OurStory'
import Story from './OurStorys/Story'
import Service from '../LandingPage/Servicess/Service'
import Blog from '../LandingPage/Blog/Blog'
import YourHealth from '../LandingPage/YourHealth/YourHealth'

const About = () => {
  return (
    <div>
      <AboutHome />
      <OurStory />
      <Story />
      <Service />
      <Blog />
      <YourHealth />
    </div>
  )
}

export default About