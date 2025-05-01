"use client"

import Image from "next/image"
import type React from "react"
import { useState } from "react"
import { BiPlusCircle } from "react-icons/bi"
import { FaArrowRight } from "react-icons/fa"

function CareerGrow() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    })
    const [file, setFile] = useState<File | null>(null)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            setIsSuccess(true)
            setFormData({ name: "", phone: "", email: "" })
            setFile(null)

            setTimeout(() => {
                setIsSuccess(false)
                setIsModalOpen(false)
            }, 3000)
        } catch (error) {
            console.error("Error submitting form:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full bg-blue-900 py-24 px-4 sm:px-8 md:px-0 lg:px-0">
                <div className="w-full lg:w-1/2 flex justify-center mb-8 md:mb-7">
                    <Image
                        src="/Pretty-Health Website/new_images/Rectangle 817.png"
                        alt="Career Image"
                        width={600}
                        height={100}
                        className="w-[600px] sm:w-[600px] md:w-[600px] lg:w-[600px] h-auto"
                    />
                </div>

                <div className="w-full lg:w-1/2 text-white lg:px-0 px-4 md:px-20">
                    <h2 className="text-2xl sm:text-3xl uppercase font-bold">Grow with us</h2>

                    <p className="text-sm sm:text-base md:text-lg text-gray-100 mt-4 lg:pr-20 text-justify">
                        At Pretty Health, we are passionate about empowering individuals to live healthier lives through preventive
                        care. As leaders in the healthcare industry, we&#39;re dedicated to providing innovative solutions that make
                        a real impact.
                    </p>

                    <p className="text-sm sm:text-base md:text-lg text-gray-100 mt-4 lg:pr-20 text-justify">
                        We&#39;re looking for forward-thinking, compassionate professionals to join our mission. Whether you&#39;re
                        in healthcare, technology, or customer service, you&#39;ll play a vital role in helping people live better,
                        healthier lives. Explore exciting career opportunities with us and become part of a team that&#39;s
                        transforming the future of preventive healthcare.
                    </p>

                    <p className="text-sm sm:text-base md:text-lg text-gray-100 mt-4 mb-6">
                        Together, we can make health happen.
                    </p>

                    <div className="flex lg:justify-end justify-center">
                        <div
                            className="flex justify-between items-center bg-white space-x-5 px-4 sm:px-6 md:px-8 py-4 border rounded-full lg:rounded-tl-full lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-full w-full max-w-[400px] md:max-w-[600px] lg:max-w-[450px] cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <div className="flex gap-6">
                                <BiPlusCircle size={40} className="flex mt-1 bg-[#2e1635] rounded-full border font-2xl p-2" />

                                <div className="flex items-center">
                                    <span className="font-extrabold uppercase text-xs sm:text-sm md:text-base text-gray-800">
                                        Join Our Talent Community
                                    </span>
                                </div>
                            </div>

                            <div className="text-white p-3 flex items-center border rounded-full bg-blue-600 transition duration-300 ease-in-out">
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-blue-900">Join Our Talent Community</h3>
                                <button title='Open' onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                                Fill in your details below to join our talent network and stay updated on new opportunities.
                            </p>
                        </div>

                        <div className="p-6">
                            {isSuccess ? (
                                <div className="py-6 text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Application Submitted!</h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Thank you for joining our talent community. We&#39;ll be in touch soon.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 ">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                                            Upload CV/Resume
                                        </label>
                                        <div className="flex items-center justify-center w-full">
                                            <label
                                                htmlFor="cv"
                                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                                            >
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg
                                                        className="w-8 h-8 mb-2 text-gray-500"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                        />
                                                    </svg>
                                                    <p className="mb-2 text-sm text-gray-500">
                                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                                    </p>
                                                    <p className="text-xs text-gray-500">PDF, DOCX or RTF (MAX. 5MB)</p>
                                                </div>
                                                <input
                                                    id="cv"
                                                    type="file"
                                                    className="hidden"
                                                    accept=".pdf,.doc,.docx,.rtf"
                                                    onChange={handleFileChange}
                                                    required
                                                />
                                            </label>
                                        </div>
                                        {file && <p className="text-sm text-gray-500 mt-1">Selected file: {file.name}</p>}
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg
                                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    Submitting...
                                                </>
                                            ) : (
                                                "Submit Application"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CareerGrow
