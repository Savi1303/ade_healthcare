"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  image: string
  bio?: string
  level: "executive" | "director" | "coordinator"
}

const team: TeamMember[] = [
  {
    name: "Dr Adeyemi A. Talabi",
    role: "Executive Director",
    image: "/Pretty-Health Website/new_images/adeyemi.jpg",
    bio: "Leading our organization with vision and expertise in healthcare management.",
    level: "executive",
  },
  {
    name: "Mr Ilori B. Isaac",
    role: "Director, Laboratory Services",
    image: "/Pretty-Health Website/new_images/llori.jpg",
    bio: "Overseeing all laboratory operations with precision and dedication to quality.",
    level: "director",
  },
  {
    name: "Mr Stephen A. Okogun",
    role: "Operations Manager",
    image: "/Pretty-Health Website/new_images/stephen.jpg",
    bio: "Ensuring smooth day-to-day operations across all our facilities.",
    level: "director",
  },
  {
    name: "Tonia N. Onuoha",
    role: "Project Coordinator",
    image: "/Pretty-Health Website/new_images/Tonia.jpg",
    bio: "Coordinating our key initiatives with efficiency and attention to detail.",
    level: "coordinator",
  },
  {
    name: "Chioma Q. Maduka",
    role: "Nursing Coordinator",
    image: "/Pretty-Health Website/new_images/chioma.jpg",
    bio: "Leading our nursing team with compassion and clinical excellence.",
    level: "coordinator",
  },
]

// Organize team by level
const executiveMembers = team.filter((member) => member.level === "executive")
const directorMembers = team.filter((member) => member.level === "director")
const coordinatorMembers = team.filter((member) => member.level === "coordinator")

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("team")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const TeamMemberCard = ({
    member,
    size = "small",
    index = 0,
  }: {
    member: TeamMember
    size?: "small" | "normal"
    index?: number
  }) => {
    const isLarge = size === "normal"
    const delay = index * 0.15

    return (
      <div
        key={member.name}
        className={`bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-center text-center 
                    transform transition-all duration-1000 hover:shadow-xl hover:-translate-y-2
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    ${isLarge ? "z-10" : ""}
                     transition-transform`}
        style={{ transitionDelay: `${delay}s` }}
        onMouseEnter={() => setHoveredMember(member.name)}
        onMouseLeave={() => setHoveredMember(null)}
      >
        <div className="mb-3 sm:mb-5 relative">
          <div
            className={`rounded-full p-1 bg-gradient-to-r ${
              member.level === "executive"
                ? "from-blue-400 to-blue-800"
                : member.level === "director"
                  ? "from-blue-700 to-blue-500"
                  : "from-blue-300 to-blue-500"
            }`}
          >
            <div
              className={`relative rounded-full overflow-hidden border-4 border-white
                          ${isLarge ? "w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44" : "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"}`}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="object-cover transition-transform duration-1000 hover:scale-90"
                fill
                sizes={
                  isLarge
                    ? "(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
                    : "(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                }
                priority
              />
            </div>
          </div>

          {/* Decorative circle */}
          <div
            className={`absolute -z-10 rounded-full bg-blue-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        ${isLarge ? "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" : "w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"}`}
          ></div>
        </div>

        <h3
          className={`font-bold text-gray-800 mb-1 ${isLarge ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg md:text-xl"}`}
        >
          {member.name}
        </h3>
        <div
          className={`h-0.5 bg-blue-600 hover:bg-blue-700 mx-auto my-1 sm:my-2 ${isLarge ? "w-12 sm:w-16" : "w-8 sm:w-12"}`}
        ></div>
        <p
          className={`font-medium text-blue-600 mb-2 sm:mb-3 ${isLarge ? "text-sm sm:text-base font-bold" : "text-xs sm:text-sm"}`}
        >
          {member.role}
        </p>

        {hoveredMember === member.name && member.bio && (
          <p
            className={`text-gray-600 mt-1 sm:mt-2 animate-fadeIn ${isLarge ? "text-sm sm:text-base" : "text-xs sm:text-sm"}`}
          >
            {member.bio}
          </p>
        )}
      </div>
    )
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#250c2c] mb-3 sm:mb-4">
            Meet Our <span className="text-blue-600 hover:text-indigo-700 transition-colors duration-300">Team</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 hover:bg-indigo-700 mx-auto mb-4 sm:mb-6 rounded-full transition-colors duration-300"></div>
          <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals behind our mission to provide exceptional healthcare.
          </p>
        </div>

        {/* Mobile View (xs to sm) */}
        <div className="block md:hidden space-y-6">
          {/* Executive */}
          <div className="flex justify-center">
            {executiveMembers[0] && <TeamMemberCard member={executiveMembers[0]} size="normal" index={0} />}
          </div>

          {/* Directors */}
          <div className="grid grid-cols-2 gap-4">
            {directorMembers.map((member, index) => (
              <div key={member.name} className="flex justify-center">
                <TeamMemberCard member={member} index={index + 1} />
              </div>
            ))}
          </div>

          {/* Coordinators */}
          <div className="grid grid-cols-2 gap-4">
            {coordinatorMembers.map((member, index) => (
              <div key={member.name} className="flex justify-center">
                <TeamMemberCard member={member} index={index + 3} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet View (md) */}
        <div className="hidden md:block lg:hidden">
          <div className="space-y-12">
            {/* Executive and Directors */}
            <div className="grid grid-cols-3 gap-4">
              {/* Left Director */}
              <div className="col-span-1 flex justify-end items-center">
                {directorMembers[0] && <TeamMemberCard member={directorMembers[0]} index={1} />}
              </div>

              {/* Center Executive */}
              <div className="col-span-1 flex justify-center items-center -mt-4">
                {executiveMembers[0] && <TeamMemberCard member={executiveMembers[0]} size="normal" index={0} />}
              </div>

              {/* Right Director */}
              <div className="col-span-1 flex justify-start items-center">
                {directorMembers[1] && <TeamMemberCard member={directorMembers[1]} index={2} />}
              </div>
            </div>

            {/* Coordinators */}
            <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
              {coordinatorMembers.map((member, index) => (
                <div key={member.name} className="col-span-1 flex justify-center">
                  <TeamMemberCard member={member} index={index + 3} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View (lg and above) - Keep original layout */}
        <div className="hidden lg:block space-y-16">
          {/* Top Row - Executive and Directors */}
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {/* Left Director */}
            <div className="col-span-1 flex justify-end items-center">
              {directorMembers[0] && <TeamMemberCard member={directorMembers[0]} index={1} />}
            </div>

            {/* Center Executive */}
            <div className="col-span-1 flex justify-center items-center -mt-6">
              {executiveMembers[0] && <TeamMemberCard member={executiveMembers[0]} size="normal" index={0} />}
            </div>

            {/* Right Director */}
            <div className="col-span-1 flex justify-start items-center">
              {directorMembers[1] && <TeamMemberCard member={directorMembers[1]} index={2} />}
            </div>
          </div>

          {/* Connecting Line with animation */}
          <div className="relative h-16 flex justify-center">
            <div className="absolute top-0 w-0.5 h-full bg-indigo-400 animate-pulse"></div>
            <div className="absolute top-0 w-2/3 h-0.5 bg-indigo-400 animate-pulse"></div>
          </div>

          {/* Bottom Row - Coordinators */}
          <div className="grid grid-cols-2 gap-4 md:gap-16 max-w-4xl mx-auto">
            {coordinatorMembers.map((member, index) => (
              <div key={member.name} className="col-span-1 flex justify-center">
                <TeamMemberCard member={member} index={index + 3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
