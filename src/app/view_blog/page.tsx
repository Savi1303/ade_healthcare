import React from 'react'
import HeroSection from '@/components/ViewBlog/HeroSection'
import MainContent from '@/components/ViewBlog/MainContent'
import Details from '@/components/ViewBlog/Details'
import SimilarNews from '@/components/ViewBlog/SimilarNews'
import Learn from '@/components/ViewBlog/Learn'

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className='w-[90%] md:px-19 lg:px-0 mx-auto mb-8 flex flex-col lg:flex-row'>
        <MainContent />
        <Details />
      </div>
      <SimilarNews />
      <Learn />
    </div>
  )
}

export default page
