"use client"

import type React from "react"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { BiPlusCircle } from "react-icons/bi"
import { FaArrowRight, FaPaperPlane, FaTimes, FaUser } from "react-icons/fa"
import { FaRobot } from "react-icons/fa6"

// Define message types
type MessageType = {
    id: number
    text: string
    sender: "bot" | "user"
    timestamp: Date
}

// Define appointment options
type AppointmentOption = {
    id: number
    name: string
}

function VaccinationHome() {
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [messages, setMessages] = useState<MessageType[]>([])
    const [newMessage, setNewMessage] = useState("")
    const [currentStep, setCurrentStep] = useState(0)
    const [bookingData, setBookingData] = useState({
        name: "",
        phone: "",
        email: "",
        vaccineType: "",
        date: "",
        time: "",
    })
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Available vaccines
    const vaccineOptions: AppointmentOption[] = [
        { id: 1, name: "HBV Vaccine", },
        { id: 2, name: "HPV Vaccine", },
        { id: 3, name: "Menigococcal Vaccine", },
        { id: 4, name: "Tdap Vaccine", },
        { id: 5, name: "Typhoid Vaccine",},
        { id: 6, name: "Varicella Vaccine", },
        { id: 7, name: "MMR (Measles Mumps Rubella)" },
    ]

    // Welcome message when chat opens
    useEffect(() => {
        if (isChatOpen && messages.length === 0) {
            addBotMessage(
                "👋 Welcome to Pretty Health Vaccination Services! I'm your virtual assistant. I can help you book your vaccination appointment. What type of vaccine are you interested in?",
            )
            setTimeout(() => {
                addBotMessage("Please select from the following options:")
                setIsTyping(true)
                setTimeout(() => {
                    setIsTyping(false)
                    vaccineOptions.forEach((vaccine) => {
                        addBotMessage(`${vaccine.id}. ${vaccine.name}`)
                    })
                    addBotMessage("Please type the number of the vaccine you're interested in.")
                    setCurrentStep(1)
                }, 1000)
            }, 1000)
        }
    }, [isChatOpen, messages.length, vaccineOptions])

    // Scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    // Add a bot message
    const addBotMessage = (text: string) => {
        setMessages((prev) => [
            ...prev,
            {
                id: Date.now(),
                text,
                sender: "bot",
                timestamp: new Date(),
            },
        ])
    }

    // Add a user message
    const addUserMessage = (text: string) => {
        setMessages((prev) => [
            ...prev,
            {
                id: Date.now(),
                text,
                sender: "user",
                timestamp: new Date(),
            },
        ])
    }

    // Process user input based on current step
    const processUserInput = (input: string) => {
        switch (currentStep) {
            case 1: // Vaccine selection
                const vaccineId = Number.parseInt(input)
                const selectedVaccine = vaccineOptions.find((v) => v.id === vaccineId)

                if (selectedVaccine) {
                    setBookingData((prev) => ({ ...prev, vaccineType: selectedVaccine.name }))
                    addBotMessage(`Great! You've selected ${selectedVaccine.name}.`)
                    setTimeout(() => {
                        addBotMessage("Please enter your full name:")
                        setCurrentStep(2)
                    }, 500)
                } else {
                    addBotMessage("I'm sorry, that's not a valid option. Please select a number from 1-5.")
                }
                break

            case 2: // Name
                setBookingData((prev) => ({ ...prev, name: input }))
                addBotMessage(`Thank you, ${input}. Now, please enter your phone number:`)
                setCurrentStep(3)
                break

            case 3: // Phone
                setBookingData((prev) => ({ ...prev, phone: input }))
                addBotMessage("Great! Please enter your email address:")
                setCurrentStep(4)
                break

            case 4: // Email
                setBookingData((prev) => ({ ...prev, email: input }))
                addBotMessage("Thank you! Please select your preferred date (DD/MM/YYYY):")
                setCurrentStep(5)
                break

            case 5: // Date
                setBookingData((prev) => ({ ...prev, date: input }))
                addBotMessage("Almost done! Please select your preferred time (e.g., 10:00 AM):")
                setCurrentStep(6)
                break

            case 6: // Time
                setBookingData((prev) => ({ ...prev, time: input }))
                setIsTyping(true)

                setTimeout(() => {
                    setIsTyping(false)
                    addBotMessage("Thank you for providing all the information! Here's a summary of your booking:")
                    addBotMessage(`Name: ${bookingData.name}
Phone: ${bookingData.phone}
Email: ${bookingData.email}
Vaccine: ${bookingData.vaccineType}
Date: ${bookingData.date}
Time: ${input}`)

                    setTimeout(() => {
                        addBotMessage(
                            "Your vaccination appointment has been scheduled! You will receive a confirmation email shortly. Is there anything else I can help you with?",
                        )
                        setCurrentStep(7)
                    }, 1000)
                }, 1500)
                break

            case 7: // Final step
                addBotMessage(
                    "Thank you for choosing Pretty Health for your vaccination needs. If you have any questions, our team is available to assist you. Have a great day!",
                )
                setTimeout(() => {
                    addBotMessage("You can close this chat window or start a new booking if needed.")
                }, 1000)
                break

            default:
                addBotMessage("I'm not sure how to respond to that. Can you please try again?")
        }
    }

    // Handle sending a message
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newMessage.trim()) return

        addUserMessage(newMessage)
        processUserInput(newMessage)
        setNewMessage("")
    }

    // Format time for message display
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    return (
        <div className="relative w-full h-[550px] sm:h-[600px] md:h-[650px] lg:h-[650px]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full -top-7 -z-10">
                <Image src="/Pretty-Health Website/new_images/Group 20647.png" alt="homeView" layout="fill" objectFit="cover" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-8 lg:px-12 space-y-6">
                <div className="absolute top-40 sm:top-40 md:top-32 lg:top-36 ">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3 lg:w-[510px]">
                        We are the largest provider of private <span className="font-extrabold">vaccination services</span> in
                        Nigeria
                    </h1>

                    <span>Making vaccination work for you, one person at a time</span>
                </div>

                {/* Location Section */}
                <div className="absolute left-0 lg:bottom-44 md:bottom-60 bottom-28 flex justify-between items-center bg-white space-x-5 px-4 sm:px-6 md:px-8 py-4 border rounded-tr-full rounded-br-full w-[350px] md:w-[600px] lg:w-[600px] ">
                    <div className="flex items-center gap-6">
                        <BiPlusCircle size={50} className="hidden md:flex mt-1 bg-[#2e1635] rounded-full border font-2xl p-2" />

                        <span className="font-extrabold uppercase text-xs lg:text-lg sm:text-sm md:text-base text-gray-800">
                            Book Your Vaccination Today!
                        </span>
                    </div>

                    <button
                        title='ChatOpen'
                        onClick={() => setIsChatOpen(true)}
                        className="text-white p-3 flex items-center border rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* Chat Modal */}
            {isChatOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg w-full max-w-md h-[600px] max-h-[90vh] flex flex-col">
                        {/* Chat Header */}
                        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <FaRobot className="text-xl" />
                                <div>
                                    <h3 className="font-bold">Vaccination Assistant</h3>
                                    <p className="text-xs text-blue-100">Online | Automated Booking Bot</p>
                                </div>
                            </div>
                            <button title='Open' onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200 transition-colors">
                                <FaTimes className="text-xl" />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-lg p-3 ${message.sender === "user"
                                                ? "bg-blue-600 text-white rounded-tr-none"
                                                : "bg-gray-200 text-gray-800 rounded-tl-none"
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            {message.sender === "bot" ? (
                                                <FaRobot className="text-xs text-gray-600" />
                                            ) : (
                                                <FaUser className="text-xs text-blue-300" />
                                            )}
                                            <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                                        </div>
                                        <p className="whitespace-pre-line">{message.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start mb-4">
                                    <div className="bg-gray-200 text-gray-800 rounded-lg rounded-tl-none max-w-[80%] p-3">
                                        <div className="flex gap-1">
                                            <span className="animate-bounce">●</span>
                                            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                                                ●
                                            </span>
                                            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                                                ●
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Chat Input */}
                        <form onSubmit={handleSendMessage} className="p-3 border-t flex gap-2">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                title='submit'
                                type="submit"
                                className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors"
                            >
                                <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VaccinationHome
