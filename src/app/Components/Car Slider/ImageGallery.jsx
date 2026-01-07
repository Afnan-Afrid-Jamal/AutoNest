'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaImages, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const ImageGallery = ({ images = [], title = "Car Image" }) => {

    const [selectedImage, setSelectedImage] = useState(0);

    if (!images.length) return null;

    const handleNext = () => setSelectedImage((prev) => (prev + 1) % images.length);
    const handlePrev = () => setSelectedImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="w-full space-y-4">

            <div className="relative aspect-[16/10] md:h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black group">
                <Image
                    src={images[selectedImage]}
                    alt={`${title} - View ${selectedImage + 1}`}
                    height={800}
                    width={1200}
                    className="h-full w-full object-cover transition-all duration-500"
                />

                <div className="absolute top-5 right-5 z-10 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-[11px] font-bold text-white tracking-widest uppercase">
                    {selectedImage + 1} / {images.length} Photos
                </div>

                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-red-600 backdrop-blur-lg p-3 rounded-full border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                    <FaChevronLeft size={18} />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-red-600 backdrop-blur-lg p-3 rounded-full border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                    <FaChevronRight size={18} />
                </button>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative flex-shrink-0 w-25 h-12 rounded-xl overflow-hidden border-2 transition-all duration-300 
                            ${selectedImage === index
                                ? 'border-red-600 ring-4 ring-red-600/20 scale-95 opacity-100'
                                : 'border-transparent opacity-50 hover:opacity-80'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${index}`}
                            className="w-25 h-12 object-contain"
                        />

                        {selectedImage === index && (
                            <div className="absolute inset-0 bg-red-600/10"></div>
                        )}
                    </button>
                ))}
            </div>


            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default ImageGallery;