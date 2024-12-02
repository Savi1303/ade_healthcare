"use client";

import React, { useState } from 'react';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  terms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  terms?: string;
}

const CardiologyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Validation function
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

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

    if (!formData.phone) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone Number must be exactly 10 digits';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
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
      console.log('Form submitted successfully:', formData);
      // API call or further processing
    }
  };

  return (
    <div className="form-container max-w-[700px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name Section */}
        <div className="group flex flex-col md:flex-row gap-6">
          <div className="form-group flex flex-col gap-2 md:w-1/2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-blue-500 w-full py-2 px-4 rounded-md placeholder:text-gray-700 text-sm outline-none"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className="form-group flex flex-col gap-2 md:w-1/2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-blue-500 w-full py-2 px-4 rounded-md placeholder:text-gray-700 text-sm outline-none"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>

        {/* Contact Section */}
        <div className="group flex flex-col md:flex-row gap-6">
          <div className="form-group flex flex-col gap-2 md:w-1/2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-blue-500 w-full py-2 px-4 rounded-md placeholder:text-gray-700 text-sm outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="form-group flex flex-col gap-2 md:w-1/2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-blue-500 w-full py-2 px-4 rounded-md placeholder:text-gray-700 text-sm outline-none"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
        </div>

        {/* Message Section */}
        <div className="form-group flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-blue-500 w-full py-2 px-4 rounded-md placeholder:text-gray-700 text-sm outline-none"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Terms and Button Section */}
        <div className="group flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="form-group flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="border border-blue-500 w-4 h-4"
            />
            <label htmlFor="terms" className="text-sm">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>
          {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all w-full md:w-auto"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardiologyForm;
