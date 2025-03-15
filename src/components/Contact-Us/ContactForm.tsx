"use client";

import React, { useState } from 'react';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  terms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
  terms?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Validation function
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate each field
    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else {
      // Remove any spaces or special characters except + sign
      const cleanNumber = formData.phoneNumber.replace(/[^\d+]/g, '');
      // Check for Nigerian format: +234 followed by 10 digits
      const isValidNigerianNumber = /^\+234\d{10}$/.test(cleanNumber);
      if (!isValidNigerianNumber) {
        newErrors.phoneNumber = 'Please enter a valid Nigerian phone number (+234XXXXXXXXXX)';
      }
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }

    // Update errors state
    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Add this function inside your ContactForm component
  const formatEmailBody = (data: FormValues): string => {
    return `
First Name: ${data.firstName}
Last Name: ${data.lastName}
Email: ${data.email}
Phone Number: ${data.phoneNumber}
Message: ${data.message}
    `.trim();
  };

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const emailBody = formatEmailBody(formData);
      const mailtoLink = `mailto:Info@prettyhealthcare.com.ng?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      // Optional: Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
        terms: false,
      });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[15px] font-semibold md:py-[20px] md:pl-[20px] md:border-l-2 lg:border-blue-500"
      >
        {/* First and Last Name */}
        <div className="group flex md:flex-row flex-col gap-[15px] md:gap-[40px]">
          <div className="form-group flex flex-col gap-[10px]">
            <label htmlFor="firstName" className="text-[13px]">
              First Name
            </label>
              <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-[#0094DE] md:w-[250px] outline-none md:py-[5px] pl-[20px] py-[10px] rounded-[5px] placeholder:text-black placeholder:text-[12px] placeholder:opacity-50"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className="form-group flex flex-col gap-[10px]">
            <label htmlFor="lastName" className="text-[13px]">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-[#0094DE] md:w-[250px] outline-none md:py-[5px] pl-[20px] py-[10px] rounded-[5px] placeholder:text-black placeholder:text-[12px] placeholder:opacity-50 "
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>

        {/* Email and Phone Number */}
        <div className="group flex flex-col md:flex-row gap-[15px] md:gap-[40px]">
          <div className="form-group flex flex-col gap-[10px]">
            <label htmlFor="email" className="text-[13px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-[#0094DE] outline-none md:w-[250px] md:py-[5px] pl-[20px] py-[10px] rounded-[5px] placeholder:text-black placeholder:text-[12px] placeholder:opacity-50"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="form-group flex flex-col gap-[10px]">
            <label htmlFor="phoneNumber" className="text-[13px]">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border border-[#0094DE] outline-none md:w-[250px] md:py-[5px] pl-[20px] py-[10px] rounded-[5px] placeholder:text-black placeholder:text-[12px] placeholder:opacity-50"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="form-group flex flex-col gap-[10px]">
          <label htmlFor="message" className="text-[13px]">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-[#0094DE] outline-none pl-[20px] pt-[10px] h-[200px] rounded-[5px] placeholder:text-black placeholder:text-[12px] placeholder:opacity-50"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Terms and Submit Button */}
        <div className="group flex flex-col gap-[15px] md:flex-row md:justify-between">
          <div className="form-group flex gap-[10px] items-center">
            <input
            placeholder="#"
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="border border-[#0094DE] p-[10px]"
            />
            <label htmlFor="terms" className="text-[11px] md:text-[13px]">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>
          {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
          <button
            type="submit"
            className="text-white bg-[#4E96D1] py-[10px] px-[30px] rounded-[5px] w-full md:w-fit flex items-center justify-center gap-2 hover:bg-[#3a75a5] transition-colors"
          >
            <span>Send</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
