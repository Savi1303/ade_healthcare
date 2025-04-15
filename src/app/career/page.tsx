import CareerGrow from '@/components/Career/CareerGrow'
import CareerHome from '@/components/Career/CareerHome'
import CareerTailor from '@/components/Career/CareerTailor'
import CareerTalent from '@/components/Career/CareerTalent'
// import CareerTeam from '@/components/Career/CareerTeam/CareerTeam'
import React from 'react'

function page() {
    return (
        <div>
            <CareerHome />
            <CareerTailor />
            <CareerGrow />
            {/* <CareerTeam /> */}
            <CareerTalent />
        </div>
    )
}

export default page