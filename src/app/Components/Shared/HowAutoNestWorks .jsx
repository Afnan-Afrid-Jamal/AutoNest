import React from 'react';
import SectionHeading from './SectionHeading';
import SubHeading from './SubHeading';

const HowAutoNestWorks = () => {
    return (
        <section className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <SectionHeading>How AutoNest Works</SectionHeading>
                <SubHeading>
                    A streamlined and transparent workflow designed separately for buyers and sellers
                </SubHeading>

                {/* Buyer & Seller Workflows */}
                <div className="grid md:grid-cols-2 gap-8 mt-15">
                    {/* Buyer Flow */}
                    <div className="relative rounded-xl border-2 border-red-600 p-8 overflow-hidden group hover:border-red-500 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 transition-opacity duration-500 opacity-100 group-hover:opacity-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-black transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

                        <div className="relative z-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>

                            <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-wide flex items-center relative">
                                <span className="w-2 h-8 bg-red-600 mr-3"></span>
                                Buying a Car
                            </h3>

                            <ul className="space-y-5 relative">
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4 mt-0.5 shadow-lg shadow-red-900/50 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                                        1
                                    </span>
                                    <span className="text-gray-300 text-lg font-medium group-hover/item:text-white transition-colors">
                                        Explore verified car listings
                                    </span>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4 mt-0.5 shadow-lg shadow-red-900/50 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                                        2
                                    </span>
                                    <span className="text-gray-300 text-lg font-medium group-hover/item:text-white transition-colors">
                                        Compare features and shortlist options
                                    </span>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4 mt-0.5 shadow-lg shadow-red-900/50 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                                        3
                                    </span>
                                    <span className="text-gray-300 text-lg font-medium group-hover/item:text-white transition-colors">
                                        Connect directly with the seller
                                    </span>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4 mt-0.5 shadow-lg shadow-red-900/50 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                                        4
                                    </span>
                                    <span className="text-gray-300 text-lg font-medium group-hover/item:text-white transition-colors">
                                        Finalize the deal securely
                                    </span>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4 mt-0.5 shadow-lg shadow-red-900/50 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                                        5
                                    </span>
                                    <span className="text-gray-300 text-lg font-medium group-hover/item:text-white transition-colors">
                                        Drive home your dream car
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Seller Flow */}
                    <div className="relative rounded-xl border-2 border-red-600 p-8 overflow-hidden group hover:border-red-500 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 transition-opacity duration-500 opacity-100 group-hover:opacity-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-black transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

                        <div className="relative z-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>

                            <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-wide flex items-center relative">
                                <span className="w-2 h-8 bg-red-600 mr-3"></span>
                                Selling a Car
                            </h3>

                            <ul className="space-y-5 relative">
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4 mt-0.5 shadow-lg shadow-red-900/50 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                                        1
                                    </span>
                                    <span className="text-gray-300 text-lg font-medium group-hover/item:text-white transition-colors">
                                        Create your seller account
                                    </span>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4 mt-0.5 shadow-lg shadow-red-900/50 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                                        2
                                    </span>
                                    <span className="text-gray-300 text-lg font-medium group-hover/item:text-white transition-colors">
                                        Submit car details and images
                                    </span>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4 mt-0.5 shadow-lg shadow-red-900/50 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                                        3
                                    </span>
                                    <span className="text-gray-300 text-lg font-medium group-hover/item:text-white transition-colors">
                                        Get your listing verified and approved
                                    </span>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4 mt-0.5 shadow-lg shadow-red-900/50 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                                        4
                                    </span>
                                    <span className="text-gray-300 text-lg font-medium group-hover/item:text-white transition-colors">
                                        Receive inquiries from buyers
                                    </span>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-lg font-bold mr-4 mt-0.5 shadow-lg shadow-red-900/50 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                                        5
                                    </span>
                                    <span className="text-gray-300 text-lg font-medium group-hover/item:text-white transition-colors">
                                        Close the deal with confidence
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowAutoNestWorks;