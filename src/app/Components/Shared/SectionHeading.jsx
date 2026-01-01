import React from 'react';

const SectionHeading = ({ children }) => {
    return (
        <div>
            <h2 className='text-3xl text-white font-bold pt-10 text-center'>{children}</h2>
        </div>
    );
};

export default SectionHeading;