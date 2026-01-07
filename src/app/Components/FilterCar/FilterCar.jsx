'use client'
import React from 'react';

const FilterCar = () => {

    const handleFilterCar = async (event) => {

        const getChoice = event.target.value;
        const carCollections = dbConnect("UserReviews");
        const getCars = await reviewCollections.find({ brand: getChoice }).toArray();

    }


    return (
        <select
            onChange={handleFilterCar}
            className="max-w-4/12 px-4 py-2 rounded-lg bg-black text-white border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 order-2 sm:order-none"
        >
            <option value="">Select Brand</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Bmw">BMW</option>
            <option value="Audi">Audi</option>
        </select>
    );
};

export default FilterCar;