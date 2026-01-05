import { dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

const CarDetails = async ({ params }) => {
    const { id } = await params;
    const carCollection = dbConnect("AllCars");
    const getCarDetails = await carCollection.findOne({ _id: new ObjectId(id) });

    return (
        <div className="min-h-screen bg-black text-gray-200 p-8 font-sans mb-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">

                {/* Image Section */}
                <div className="relative md:w-1/2 flex justify-center items-center">
                    <Image
                        src={getCarDetails?.images}
                        alt={getCarDetails?.title}
                        width={600}
                        height={400}
                        className="rounded-xl shadow-[0_0_50px_rgba(220,38,38,0.3)] transition-transform duration-500 hover:scale-105"
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-black px-4 py-1 text-sm font-bold tracking-widest rounded">
                        Posted: {getCarDetails?.createdAt}
                    </div>
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 bg-black rounded-xl p-8 border border-red-500 shadow-lg flex flex-col justify-between">
                    <div className="break-words">
                        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-3  uppercase break-words">
                            {getCarDetails?.title}
                        </h1>
                        <p className="text-gray-300 font-semibold mb-6 uppercase tracking-wide text-sm md:text-base wrap-break-word">
                            {getCarDetails?.brand} • {getCarDetails?.model} • {getCarDetails?.year}
                        </p>

                        <div className="text-3xl md:text-4xl font-bold text-red-500 mb-6 break-words">
                            ৳ {getCarDetails?.price}
                            {getCarDetails?.priceNegotiable && (
                                <span className="text-sm md:text-base text-gray-300 ml-2 break-words">(Negotiable)</span>
                            )}
                        </div>

                        <div className="flex justify-between text-sm md:text-base mb-6 break-words">
                            <div className="border-l-4 border-red-600 pl-3 break-words"><span className="text-gray-300 uppercase text-xs md:text-sm">Condition</span><br /><span className="font-semibold text-primary text-lg">{getCarDetails?.condition}</span></div>
                            <div className="border-l-4 border-red-600 pl-3 break-words"><span className="text-gray-300 uppercase text-xs md:text-sm">Mileage</span><br /><span className="font-semibold text-primary text-lg">{getCarDetails?.mileage} km</span></div>
                            <div className="border-l-4 border-red-600 pl-3 break-words"><span className="text-gray-300 uppercase text-xs md:text-sm">Fuel Type</span><br /><span className="font-semibold text-primary text-lg">{getCarDetails?.fuelType}</span></div>
                            <div className="border-l-4 border-red-600 pl-3 break-words"><span className="text-gray-300 uppercase text-xs md:text-sm">Transmission</span><br /><span className="font-semibold text-primary text-lg">{getCarDetails?.transmission}</span></div>
                            <div className="border-l-4 border-red-600 pl-3 break-words"><span className="text-gray-300 uppercase text-xs md:text-sm">Engine Capacity</span><br /><span className="font-semibold text-primary text-lg">{getCarDetails?.engineCapacity}</span></div>
                            <div className="border-l-4 border-red-600 pl-3 break-words"><span className="text-gray-300 uppercase text-xs md:text-sm">Color</span><br /><span className="font-semibold text-primary text-lg">{getCarDetails?.color}</span></div>
                        </div>

                        <div className="mt-6 border-t border-red-600/30 pt-4 flex justify-between text-sm md:text-base mb-6 break-words">
                            <div>
                                <p className="text-gray-300 uppercase text-xs md:text-sm tracking-wide break-words">Location</p>
                                <p className="font-semibold  text-primary text-lg break-words">{getCarDetails?.locationCity}, {getCarDetails?.locationCountry}</p>
                            </div>
                            <div className="text-right break-words">
                                <p className="text-gray-300 uppercase text-xs md:text-sm tracking-wide break-words">Status</p>
                                <p className="text-red-500 font-bold uppercase break-words  text-primary text-lg">{getCarDetails?.status}</p>
                            </div>
                        </div>

                        <div className="mb-6 break-words">
                            <p className="text-gray-300 text-xs md:text-sm uppercase mb-2 tracking-wide break-words">Description</p>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base break-words text-primary text-lg">
                                {getCarDetails?.description}
                            </p>
                        </div>

                        {/* Seller Info */}
                        <div className="bg-gradient-to-r from-black to-gray-900 border-2 border-red-600 rounded-xl p-6 shadow-[0_0_30px_rgba(220,38,38,0.25)] mb-6 break-words">
                            <p className="text-red-500 uppercase text-xs md:text-sm tracking-widest mb-4 font-bold break-words">Seller Information</p>
                            <div className="space-y-2 text-sm md:text-base break-words">
                                <p><span className="text-gray-300 font-normal">Name:</span> <span className="font-semibold break-words text-primary text-lg">{getCarDetails?.sellerName || 'John Doe'}</span></p>
                                <p><span className="text-gray-300 font-normal">Phone:</span> <span className="font-semibold break-words text-primary text-lg">{getCarDetails?.sellerPhone || '+8801XXXXXXXXX'}</span></p>
                                <p><span className="text-gray-300 font-normal">Email:</span> <span className="font-semibold break-words text-primary text-lg">{getCarDetails?.sellerEmail || 'seller@email.com'}</span></p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;