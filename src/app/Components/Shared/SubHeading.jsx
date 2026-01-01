import React from 'react';

const SubHeading = ({ children }) => {
    return (
        <div>
            <h3 className='text-gray-300 text-center pt-3'>{children}</h3>
        </div>
    );
};

export default SubHeading;