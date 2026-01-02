import React from 'react';

const loading = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600 opacity-5 blur-3xl rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-800 opacity-5 blur-3xl rounded-full animate-pulse delay-700"></div>
            </div>

            <div className="relative z-10 text-center">
                {/* Spinning Car Wheel */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 border-4 border-red-600/20 rounded-full"></div>

                    {/* Spinning Ring */}
                    <div className="absolute inset-0 border-4 border-transparent border-t-red-600 rounded-full animate-spin"></div>

                    {/* Inner Spinning Ring */}
                    <div className="absolute inset-3 border-4 border-transparent border-t-red-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>

                    {/* Center Car Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-red-600 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                        </svg>
                    </div>
                </div>

                {/* Loading Text */}
                <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-3">
                    Loading
                </h2>

                <div className="flex items-center justify-center gap-1 mb-4">
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                </div>

                <p className="text-gray-400 text-lg">
                    Revving up your experience...
                </p>

                {/* Progress Bar */}
                <div className="mt-8 w-64 mx-auto">
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-600 to-red-800 rounded-full animate-pulse"
                            style={{
                                animation: 'progress 1.5s ease-in-out infinite',
                            }}>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes progress {
                    0% {
                        width: 0%;
                        opacity: 0.5;
                    }
                    50% {
                        width: 70%;
                        opacity: 1;
                    }
                    100% {
                        width: 100%;
                        opacity: 0.5;
                    }
                }
            `}</style>
        </div>
    );
};

export default loading;