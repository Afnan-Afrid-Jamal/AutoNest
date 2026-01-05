import SectionHeading from '@/app/Components/Shared/SectionHeading';
import SubHeading from '@/app/Components/Shared/SubHeading';
import { dbConnect } from '@/lib/dbConnect';
import React from 'react';
import { FaQuoteLeft, FaStar, FaUserCircle } from 'react-icons/fa';

const AllReviews = async () => {

    const reviewCollections = dbConnect("UserReviews");
    const getAllReview = await reviewCollections.find().toArray();

    return (
        <div className='bg-black'>
            <div className="max-w-11/12 mx-auto relative z-10 -top-5">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <SectionHeading>Experiences That <span className='text-primary'>Drive</span> Trust</SectionHeading>

                    <div className="flex items-center justify-center gap-2 mb-3">

                        <SubHeading>Trusted by thousands of car enthusiasts</SubHeading>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getAllReview.map((review, index) => (
                        <div
                            key={review._id.toString()}
                            className="relative group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative rounded-xl border-2 border-red-600/30 p-6 overflow-hidden transition-all duration-500 hover:border-red-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent to-black opacity-100 group-hover:opacity-0 transition-opacity"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="relative z-10">
                                    <FaQuoteLeft className="text-red-600 text-3xl opacity-50 mb-4" />

                                    <p className="text-gray-300 mb-6 line-clamp-4 group-hover:text-white transition-colors">
                                        {review.comment}
                                    </p>

                                    <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                                            <FaUserCircle className="text-white text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold">
                                                {review.userName}
                                            </h3>
                                            <div className="flex gap-1 text-primary">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <span className="absolute top-4 right-4 px-3 py-1 bg-red-600/20 border border-red-600 text-red-500 text-xs font-bold rounded-full">
                                        VERIFIED
                                    </span>
                                </div>
                            </div>

                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllReviews;