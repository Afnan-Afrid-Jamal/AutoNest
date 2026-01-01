import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary text-neutral-content py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo & Description */}
                <div className="flex flex-col items-start">
                    <Image src="/Logo.png" alt="AutoNest Logo" width={150} height={50} className="mb-4" />

                    {/* Social Icons */}
                    <div className="flex mt-4 space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                            <FaFacebookF size={25} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                            <FaTwitter size={25} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                            <FaInstagram size={25} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                            <FaLinkedinIn size={25} />
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h6 className="text-white font-semibold mb-4">Services</h6>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-red-500">Branding</a></li>
                        <li><a href="#" className="hover:text-red-500">Design</a></li>
                        <li><a href="#" className="hover:text-red-500">Marketing</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h6 className="text-white font-semibold mb-4">Company</h6>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-red-500">About Us</a></li>
                        <li><a href="#" className="hover:text-red-500">Contact</a></li>
                        <li><a href="#" className="hover:text-red-500">Jobs</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h6 className="text-white font-semibold mb-4">Legal</h6>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-red-500">Terms of Use</a></li>
                        <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-red-500">Cookie Policy</a></li>
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} AutoNest. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
