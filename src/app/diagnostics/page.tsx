import React from 'react'
import HeroSection from '@/components/Diagnostics/HeroSection'
import Cardiology from '@/components/Diagnostics/Cardiology'
import ServicesSection from '@/components/school_health/ServicesSection'
import BlogSection from '@/components/school_health/BlogSection'
import PrioritySection from '@/components/school_health/PrioritySection'

const page = () => {
  return (
    <div>
      <HeroSection />
      <Cardiology />
      <ServicesSection />
      <BlogSection />
      <PrioritySection />
    </div>
  )
}

export default page
