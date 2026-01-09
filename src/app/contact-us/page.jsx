'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaPaperPlane
} from 'react-icons/fa';
import SectionHeading from '../Components/Shared/SectionHeading';
import SubHeading from '../Components/Shared/SubHeading';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                toast.success('Message sent successfully!', {
                    style: {
                        background: '#000',
                        color: '#fff',
                        border: '1px solid #dc2626', // red-600
                    },
                    iconTheme: {
                        primary: '#dc2626',
                        secondary: '#000',
                    },
                });

                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);

                toast.error('Failed to send message. Please try again.', {
                    style: {
                        background: '#000',
                        color: '#fff',
                        border: '1px solid #dc2626',
                    },
                    iconTheme: {
                        primary: '#dc2626',
                        secondary: '#000',
                    },
                });
            });

    };

    return (
        <div className="bg-black text-white">
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <SectionHeading>
                            Get In <span className="text-red-600">Touch</span>
                        </SectionHeading>
                        <SubHeading>
                            We'd love to hear from you. Let's start a conversation.
                        </SubHeading>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mb-20">

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="relative rounded-2xl border-2 border-red-600/30 p-8 md:p-12 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-1 h-12 bg-red-600"></div>
                                        <h3 className="text-3xl font-black uppercase">
                                            Send Us a Message
                                        </h3>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6 pb-10">

                                        {/* Name */}
                                        <div>
                                            <label className="block text-red-600 text-xs font-bold mb-2 uppercase">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black border-2 border-gray-800 py-3 px-5 rounded-xl focus:border-red-600 outline-none"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-red-600 text-xs font-bold mb-2 uppercase">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black border-2 border-gray-800 py-3 px-5 rounded-xl focus:border-red-600 outline-none"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-red-600 text-xs font-bold mb-2 uppercase">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                rows="6"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black border-2 border-gray-800 py-3.5 px-5 rounded-xl focus:border-red-600 outline-none resize-none"
                                            />
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            className="group relative w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-black py-4 rounded-xl uppercase tracking-wide"
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                <FaPaperPlane />
                                                Send Message
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6 mt-10 pb-10">
                            <ContactInfo />
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ================= Components ================= */

const ContactInfo = () => (
    <div className="relative rounded-2xl border-2 border-red-600/30 p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="relative z-10 space-y-6">
            <h4 className="text-2xl font-black uppercase mb-6">Contact Info</h4>
            <ContactInfoItem icon={<FaPhone />} title="Phone" info="+880 1XXX-XXXXXX" />
            <ContactInfoItem icon={<FaEnvelope />} title="Email" info="support@autonest.com" />
            <ContactInfoItem icon={<FaMapMarkerAlt />} title="Address" info="Dhaka, Bangladesh" />
            <ContactInfoItem icon={<FaClock />} title="Working Hours" info="Mon - Sat: 9 AM - 8 PM" />
        </div>
    </div>
);

const SocialLinks = () => (
    <div className="relative rounded-2xl border-2 border-red-600/30 p-8 mt-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>
        <div className="relative z-10">
            <h4 className="text-2xl font-black uppercase mb-6">Follow Us</h4>
            <div className="grid grid-cols-2 gap-4">
                <SocialButton icon={<FaFacebook />} label="Facebook" />
                <SocialButton icon={<FaTwitter />} label="Twitter" />
                <SocialButton icon={<FaInstagram />} label="Instagram" />
                <SocialButton icon={<FaLinkedin />} label="LinkedIn" />
            </div>
        </div>
    </div>
);

const ContactInfoItem = ({ icon, title, info }) => (
    <div className="flex items-start gap-4">
        <div className="text-2xl text-red-600 mt-1">{icon}</div>
        <div>
            <h5 className="text-sm font-bold text-gray-400 uppercase mb-1">{title}</h5>
            <p className="text-white font-semibold">{info}</p>
        </div>
    </div>
);

const SocialButton = ({ icon, label }) => (
    <button className="flex items-center justify-center gap-2 bg-black border-2 border-gray-800 hover:border-red-600 py-3 rounded-lg">
        <span className="text-xl text-red-600">{icon}</span>
        <span className="text-sm font-bold">{label}</span>
    </button>
);

export default ContactUs;
