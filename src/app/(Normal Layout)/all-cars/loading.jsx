import React from 'react';

const CarSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 bg-black px-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div
                    key={item}
                    className="relative rounded-xl border-2 border-red-600/20 overflow-hidden bg-gray-900 animate-pulse shadow-lg"
                >
                    {/* Image Section Skeleton with Condition Badge Placeholder */}
                    <div className="relative h-56 w-full bg-gradient-to-b from-gray-800 to-gray-700">
                        <div className="absolute top-3 right-3 bg-gray-600 h-5 w-14 rounded"></div>
                    </div>

                    {/* Content Section Skeleton */}
                    <div className="p-6 relative bg-black">
                        {/* Shimmer/Gradient Effect like your original card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black"></div>

                        <div className="relative z-10">
                            {/* Title Skeleton */}
                            <div className="h-6 bg-gray-800 rounded-md w-3/4 mb-5"></div>

                            {/* Icons Row Skeleton (Calendar & Fuel) */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2 w-1/4">
                                    <div className="w-4 h-4 rounded-full bg-red-900/40"></div>
                                    <div className="h-3 bg-gray-800 rounded w-full"></div>
                                </div>
                                <div className="flex items-center gap-2 w-1/4">
                                    <div className="w-4 h-4 rounded-full bg-red-900/40"></div>
                                    <div className="h-3 bg-gray-800 rounded w-full"></div>
                                </div>
                            </div>

                            {/* Price and Button Skeleton */}
                            <div className="flex justify-between items-center mt-6">
                                {/* Price Placeholder */}
                                <div className="h-8 bg-gray-800 rounded-lg w-1/3 border-l-4 border-red-900/30"></div>

                                {/* Button Placeholder */}
                                <div className="h-10 bg-red-900/20 rounded-lg w-28 border border-red-900/30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CarSkeleton;