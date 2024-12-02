import React from 'react';
import Image from 'next/image';
import CardiologyForm from './CardiologyForm';
import { CheckCheck } from 'lucide-react';
import MedicineNephrologyList from './MedicineNephrologyList';

const Cardiology = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-12 py-10 flex flex-col items-start lg:flex-row gap-8">
      {/* Sidebar */}
      <MedicineNephrologyList />

      {/* Main Content */}
      <div className="flex-1">
        {/* Banner Image */}
        <Image
          src="/Pretty-Health Website/Images/Image (8).png"
          alt="Cardiology"
          layout="responsive"
          width={100}
          height={50} // Aspect ratio
          className="rounded-lg mb-6"
        />

        {/* Cardiology Introduction */}
        <article>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Cardiology</h1>
          <p className="text-sm md:text-base mb-6">
            Prettyhealth has one of the largest Cardio care programs in a community academic hospital in the GTA
            (Greater Toronto Area), providing treatment for many types of CVD, including heart transplant, open-heart
            surgery, and more.
          </p>
        </article>

        {/* Description */}
        <p className="text-sm md:text-base mb-6">
          Prettyhealth General is constantly thinking and going beyond for our patients, community, and people. As
          people and communities change, Prettyhealth General will continuously evolve to meet their needs.
        </p>

        {/* Features */}
        <article>
          <h3 className="text-lg md:text-xl font-bold mb-4">
            Enhancing the Patient and Family Experience
          </h3>
          <p className="text-sm md:text-base mb-4">
            We ensure our patients receive the highest standard of cardio care. Patients and their families have access
            to a range of facilities:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2">
              <CheckCheck size={20} className="text-green-600" />
              The BMO Breast Diagnostic Clinic, part of the Karen, Heather & Lynn Steinberg Breast Centre.
            </li>
            <li className="flex items-start gap-2">
              <CheckCheck size={20} className="text-green-600" />
              The Baruch/Weisz Cardio Centre.
            </li>
            <li className="flex items-start gap-2">
              <CheckCheck size={20} className="text-green-600" />
              Freeman Centre for the Advancement of Palliative Care.
            </li>
            <li className="flex items-start gap-2">
              <CheckCheck size={20} className="text-green-600" />
              Gale and Graham Wright Prostate Centre.
            </li>
          </ul>
        </article>

        {/* Form */}
        <CardiologyForm />
      </div>
    </section>
  );
};

export default Cardiology;
