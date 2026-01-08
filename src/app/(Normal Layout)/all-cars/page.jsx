import { dbConnect } from '@/lib/Utils/actions/dbConnect';
import React from 'react';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaGasPump } from 'react-icons/fa';
import Link from 'next/link';
import { IoCarSport } from "react-icons/io5";
import Image from 'next/image';
import SectionHeading from '@/app/Components/Shared/SectionHeading';
import SubHeading from '@/app/Components/Shared/SubHeading';
import FilterCar from '@/app/Components/FilterCar/FilterCar';

const AllCars = async ({ searchParams }) => {

    const params = await searchParams;
    const page = parseInt(params?.page) || 1;
    const limit = 9;
    const skip = (page - 1) * limit;

    const allCarsCollections = dbConnect("AllCars");

    const totalCars = await allCarsCollections.countDocuments();
    const totalPages = Math.ceil(totalCars / limit);

    const getAllCars = await allCarsCollections
        .find()
        .skip(skip)
        .limit(limit)
        .toArray();

    return (
        <div className="min-h-screen bg-black pb-10">
            <SectionHeading>Find Your <span className='text-primary'>Dream</span> Car</SectionHeading>
            <SubHeading>Discover our exclusive collection of automobiles</SubHeading>

            {/* Filter & Search Section */}
            <div className="max-w-11/12 mx-auto mt-8 px-4">
                <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">

                    {/* Searchbox with Button (small device e upore) */}
                    <div className="flex max-w-4/12 sm:w-2/3 order-1 sm:order-none">
                        <input
                            type="text"
                            placeholder="Search cars..."
                            className="flex-1 px-4 py-2 rounded-l-full bg-black text-red-500 border border-red-600"
                        />
                        <button
                            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-r-lg hover:bg-red-700 transition active:scale-95"
                        >
                            Search
                        </button>
                    </div>

                    {/* Dropdown (small device e niche) */}
                    <FilterCar></FilterCar>
                </div>
            </div>

            <div className="max-w-11/12 mx-auto pt-12 px-1">
                {getAllCars.length > 0 ? (
                    <>
                        {/* Cars Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {getAllCars.map((car) => (
                                <div
                                    key={car._id.toString()}
                                    className="relative rounded-xl border-2 border-red-600/30 overflow-hidden transition-all duration-500 hover:border-red-500 group bg-gray-900"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <Image
                                            src={car.images[0]}
                                            alt={car.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            priority={false}
                                        />
                                        <div className="absolute top-3 right-3 z-20 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                            {car.condition}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative z-10">
                                            <h2 className="text-xl font-bold text-white mb-1 truncate">{car.brand}{" "}{car.model}</h2>

                                            {/* Icons Added Here */}
                                            <div className="flex justify-between text-sm text-gray-400 mb-4 font-medium">
                                                <span className="flex items-center gap-1.5">
                                                    <FaCalendarAlt className="text-red-600" /> {car.year}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <FaGasPump className="text-red-600" /> {car.fuelType}
                                                </span>
                                            </div>

                                            <div className="flex justify-between items-center mt-4">
                                                <p className="text-red-600 font-bold text-xl">৳ {car.price.toLocaleString()}</p>
                                                <Link
                                                    href={`/all-cars/${car._id}`}
                                                    className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition-all active:scale-95"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-3 mt-12">
                            <Link
                                href={page > 1 ? `?page=${page - 1}` : '#'}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${page > 1 ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-800 text-gray-500 pointer-events-none'
                                    }`}
                            >
                                <FaChevronLeft /> Previous
                            </Link>

                            <div className="hidden sm:flex gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                    <Link
                                        key={pageNum}
                                        href={`?page=${pageNum}`}
                                        className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition ${page === pageNum ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                            }`}
                                    >
                                        {pageNum}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href={page < totalPages ? `?page=${page + 1}` : '#'}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${page < totalPages ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-800 text-gray-500 pointer-events-none'
                                    }`}
                            >
                                Next <FaChevronRight />
                            </Link>
                        </div>
                    </>
                ) : (
                    /* Empty State Section */
                    <div className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0">
                            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600 opacity-5 blur-3xl rounded-full animate-pulse"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-800 opacity-5 blur-3xl rounded-full animate-pulse"></div>
                        </div>

                        <div className="text-center relative z-10 max-w-2xl px-4">
                            <div className="mb-8 inline-block">
                                <div className="w-32 h-32 mx-auto bg-red-600/10 rounded-full flex items-center justify-center border border-red-600/20">
                                    <IoCarSport size={60} className="text-red-600" />
                                </div>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
                                No Cars Found
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                We couldn't find any cars matching your search. Try adjusting your filters or check back later.
                            </p>

                            <Link
                                href="/"
                                className="inline-block px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition duration-300 transform hover:scale-105 shadow-lg shadow-red-900/20"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllCars;