import React from 'react'
import HeroSection from '@/components/Diagnostics/HeroSection'
import DiagnosticsLab from '@/components/Diagnostics/DiagnosticsLab'
import DiagnosticsGrid from '@/components/Diagnostics/DiagnosticsCard/DiagnosticsGrid'
import WhyBookWithUs from '@/components/Diagnostics/DiagnosticsBook/WhyBookWithUs'


const page = () => {
  return (
    <div>
      <HeroSection />
      <DiagnosticsLab />
      <DiagnosticsGrid /> 
      <WhyBookWithUs />     
    </div>
  )
}

export default page
