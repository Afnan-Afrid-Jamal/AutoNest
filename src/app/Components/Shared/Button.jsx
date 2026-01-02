import React from 'react';

const Button = ({ children }) => {
    return (
        <button className="px-8 py-4 bg-primary hover:cursor-pointer hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 text-white font-bold rounded-xl hover:scale-105 transition">
            {children}
        </button>
    );
};

export default Button;