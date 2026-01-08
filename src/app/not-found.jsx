import Link from 'next/link';
import React from 'react';
import { FaHome, FaSearch, FaBolt, FaCar, FaEnvelope, FaTags } from 'react-icons/fa';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 opacity-10 blur-3xl rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800 opacity-10 blur-3xl rounded-full animate-pulse delay-700"></div>
            </div>

            <div className="max-w-4xl w-full relative z-10">
                <div className="text-center">
                    {/* 404 Number with Sporty Design */}
                    <div className="relative mb-8">
                        <h1 className="text-[180px] md:text-[250px] font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-red-600 to-red-900 leading-none select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <FaBolt className="w-20 h-20 md:w-32 md:h-32 text-red-600 opacity-50 animate-pulse" />
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                            Route Not Found
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Looks like this page took a wrong turn. Let's get you back on track to find your dream car.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link href={"/"} className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50">
                            <span className="relative z-10 flex items-center gap-2">
                                <FaHome className="w-5 h-5" />
                                Back to Home
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>

                        <Link href={"/all-cars"} className="group relative px-8 py-4 bg-transparent border-2 border-red-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-red-500">
                            <span className="relative z-10 flex items-center gap-2">
                                <FaSearch className="w-5 h-5" />
                                Browse Cars
                            </span>
                            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </Link>
                    </div>

                </div>

                {/* Decorative Racing Stripes */}
                <div className="absolute -bottom-20 left-0 right-0 flex gap-4 opacity-20 pointer-events-none">
                    <div className="flex-1 h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent transform -skew-x-12"></div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent transform -skew-x-12"></div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent transform -skew-x-12"></div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;