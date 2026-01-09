import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../Components/Shared/SectionHeading';
import SubHeading from '../Components/Shared/SubHeading';
import Link from 'next/link';

const AboutAutoNest = () => {
    return (
        <div className="bg-black text-white max-w-11-12 mx-auto">
            {/* Hero Section */}
            <div className="relative overflow-hidden">

                <div className="max-w-11/12 mx-auto relative z-10">
                    <div className="text-center pb-10">
                        <SectionHeading>
                            About <span className="text-red-600">AutoNest</span>
                        </SectionHeading>
                        <SubHeading>
                            Your trusted partner in buying and selling quality vehicles
                        </SubHeading>
                    </div>

                    {/* Mission Statement */}
                    <div className="max-w-11/12 mx-auto mt-10 pb-10">
                        <div className="relative rounded-2xl border-2 border-red-600/30 p-8 md:p-12 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-black uppercase mb-6 text-red-600">
                                    Our Mission
                                </h3>
                                <p className="text-xl text-gray-300 leading-relaxed text-justify">
                                    At AutoNest, we're revolutionizing the car buying and selling experience.
                                    We connect passionate car enthusiasts with their dream vehicles while providing
                                    sellers with a trusted platform to reach serious buyers. Our commitment is to
                                    make every transaction transparent, secure, and seamless.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-10 pb-10">
                        <div className="relative rounded-2xl border-2 border-red-600/30 p-12 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>
                            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
                                <StatCard number="10,000+" label="Cars Sold" />
                                <StatCard number="25,000+" label="Happy Customers" />
                                <StatCard number="500+" label="Verified Dealers" />
                                <StatCard number="50+" label="Cities Covered" />
                            </div>
                        </div>
                    </div>



                    {/* Our Story */}
                    <div className="max-w-4xl mx-auto mt-10 pb-10">
                        <div className="relative rounded-2xl border-2 border-red-600/30 p-8 md:p-12 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-1 h-12 bg-red-600"></div>
                                    <h3 className="text-3xl font-black uppercase">Our Story</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Founded in 2024, AutoNest was born from a simple vision.
                                </p>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Starting with just a handful of listings, we've grown rapidly.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    We're not just a marketplace; we're a community of car lovers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-10 pb-1">
                        <div className="relative rounded-2xl border-2 border-red-600/30 p-12 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl font-black uppercase mb-4">
                                    Ready to Find Your <span className="text-red-600">Dream Car?</span>
                                </h3>
                                <p className="text-xl text-gray-300 mb-8">
                                    Join thousands of satisfied customers on AutoNest today
                                </p>
                                <Link
                                    href="/all-cars"
                                    className="inline-block px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-black rounded-xl uppercase tracking-wide"
                                >
                                    Browse Cars
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const StatCard = ({ number, label }) => (
    <div className="text-center">
        <div className="text-4xl md:text-5xl font-black text-red-600 mb-2">
            {number}
        </div>
        <div className="text-gray-400 font-semibold uppercase tracking-wide text-sm">
            {label}
        </div>
    </div>
);

const FeatureCard = ({ icon, title, features }) => (
    <div className="relative rounded-xl border-2 border-red-600/30 p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl text-red-600">{icon}</div>
                <h4 className="text-2xl font-black uppercase">{title}</h4>
            </div>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <FaCheckCircle className="text-red-600 mt-1" />
                        <span className="text-gray-300">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default AboutAutoNest;
