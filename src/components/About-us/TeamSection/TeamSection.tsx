'use client'

import Image from 'next/image'

interface TeamMember {
    name: string
    role: string
    image: string
}

const team: TeamMember[] = [
    {
        name: 'Dr Adeyemi A. Talabi',
        role: 'Executive Director',
        image: '/Pretty-Health Website/new_images/adeyemi.jpg',
    },
    {
        name: 'Mr Ilori B. Isaac',
        role: 'Director, Laboratory Services',
        image: '/Pretty-Health Website/new_images/llori.jpg',
    },
    {
        name: 'Mr Stephen A. Okogun',
        role: 'Operations Manager',
        image: '/Pretty-Health Website/new_images/stephen.jpg',
    },
    {
        name: 'Tonia N. Onuoha',
        role: 'Project Coordinator',
        image: '/Pretty-Health Website/new_images/Tonia.jpg',
    },
    {
        name: 'Chioma Q. Maduka',
        role: 'Nursing Coordinator',
        image: '/Pretty-Health Website/new_images/chioma.jpg',
    },
]

export default function TeamSection() {
    return (
        <section className="py-16 bg-gray-50" id="team">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Dedicated professionals behind our mission.
                    </p>
                </div>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                        >
                            <div className="mb-4 rounded-full p-1 border border-gray-400">
                                <div className="rounded-full p-1 bg-white">
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-1 border-gray-200">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            className="object-cover"
                                            fill
                                        />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
