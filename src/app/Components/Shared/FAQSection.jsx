
import React from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import SectionHeading from './SectionHeading';
import SubHeading from './SubHeading';

const FAQSection = () => {
    const faqs = [
        {
            question: "How can I list my car on AutoNest?",
            answer: "You can register an account, log in, and click on 'Add Car' in your dashboard. Fill out the details and submit for approval.",
        },
        {
            question: "Is there a fee to use AutoNest?",
            answer: "Basic usage of AutoNest for browsing and listing cars is free. Premium features may have subscription fees.",
        },
        {
            question: "How do I contact a seller?",
            answer: "Go to the car details page and use the 'Contact Seller' button to send a message or view their contact info.",
        },
        {
            question: "Are all car listings verified?",
            answer: "Yes, our admin team reviews all listings before they go live to ensure authenticity and safety.",
        },
    ];

    return (
        <section className="bg-secondary text-white py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <SectionHeading>Frequently Asked <span className="text-primary">Questions</span></SectionHeading>
                <SubHeading className="text-gray-300 mt-3">
                    Find answers to common questions about AutoNest.
                </SubHeading>

                {/* Accordion */}
                <div className="mt-12 space-y-4 text-left">
                    {faqs.map((faq, idx) => (
                        <details key={idx} className="bg-accent border-1 border-primary p-6 rounded-xl shadow-lg group">
                            <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                                {faq.question}
                                <span className="ml-2 text-red-500 group-open:hidden">
                                    <AiOutlinePlus />
                                </span>
                                <span className="ml-2 text-red-500 hidden group-open:inline">
                                    <AiOutlineMinus />
                                </span>
                            </summary>
                            <p className="mt-4 text-gray-300">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
