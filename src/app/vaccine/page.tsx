import VaccinationCard from '@/components/Vaccination/VaccinationCard'
import VaccinationHome from '@/components/Vaccination/VaccinationHome'
import VaccinationNation from '@/components/Vaccination/VaccinationNation'
import React from 'react'

const page = () => {
    return (
        <div>
            <VaccinationHome />
            <VaccinationNation />
            <VaccinationCard />
        </div>
    )
}

export default page