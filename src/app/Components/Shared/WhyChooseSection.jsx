import React from 'react'
import SectionHeading from './SectionHeading'
import SubHeading from './SubHeading'
import { MdVerified } from "react-icons/md";
import { FaHandshake, FaBolt, FaHeadset } from "react-icons/fa"; // extra icons

const WhyChooseSection = () => {
    return (
        <section className="bg-secondary py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <SectionHeading>
                    Why Choose <span className="text-primary">AutoNest</span>?
                </SectionHeading>

                {/* Subheading */}
                <SubHeading className="text-gray-300 mt-3">
                    Trusted Marketplace for Buying and Selling Cars Easily
                </SubHeading>

                {/* Feature Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1 */}
                    <div className="border-2 border-red-500 p-6 rounded-xl flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300">
                        <MdVerified className="text-red-500 text-5xl mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-2">Verified Listings</h3>
                        <p className="text-gray-300 text-sm">
                            All car listings are checked for authenticity before going live.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="border-2 border-red-500 p-6 rounded-xl flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300">
                        <FaHandshake className="text-red-500 text-5xl mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-2">Trusted Sellers</h3>
                        <p className="text-gray-300 text-sm">
                            Connect with verified buyers and sellers across the platform.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="border-2 border-red-500 p-6 rounded-xl flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300">
                        <FaBolt className="text-red-500 text-5xl mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-2">Fast Transactions</h3>
                        <p className="text-gray-300 text-sm">
                            Easy communication and quick deals with minimal hassle.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="border-2 border-red-500 p-6 rounded-xl flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300">
                        <FaHeadset className="text-red-500 text-5xl mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-300 text-sm">
                            We are always ready to assist you with any queries or issues.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseSection
