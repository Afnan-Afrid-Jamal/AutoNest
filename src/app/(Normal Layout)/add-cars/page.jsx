"use client";
import React, { useState } from 'react';
import { uploadImage } from '@/lib/Utils/uploadPhoto';
import { createCar } from '@/lib/Utils/actions/carActions';
import { toast } from 'react-toastify';
import { FaCar, FaUpload } from 'react-icons/fa';

const AddCarForm = () => {
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImagePreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const imageFile = form.imageFile.files[0];

        if (!imageFile) {
            toast.warn("Please select an image", {
                position: "top-center",
                theme: "dark",
            });
            return;
        }

        try {
            setUploading(true);

            const imageUrl = await uploadImage(imageFile);

            if (!imageUrl) {
                toast.error("Image upload failed!", {
                    position: "top-center",
                    theme: "dark",
                });
                return;
            }

            const carData = {
                title: form.title.value,
                brand: form.brand.value,
                model: form.model.value,
                year: parseInt(form.year.value),
                price: parseFloat(form.price.value),
                priceNegotiable: form.priceNegotiable.checked,
                condition: form.condition.value,
                mileage: parseInt(form.mileage.value),
                fuelType: form.fuelType.value,
                transmission: form.transmission.value,
                engineCapacity: form.engineCapacity.value,
                color: form.color.value,
                locationCountry: form.locationCountry.value,
                locationCity: form.locationCity.value,
                description: form.description.value,
                images: imageUrl,
                status: "pending",
                createdAt: new Date().toLocaleString('en-GB'),
            };

            const response = await createCar(carData);

            if (response.success) {
                toast.success(response.message, {
                    position: "top-center",
                    theme: "dark",
                });
                form.reset();
                setSelectedImage(null);
            } else {
                toast.error(response.message, {
                    position: "top-center",
                    theme: "dark",
                });
            }

        } catch (error) {
            console.error(error);
            toast.error("An error occurred! Please try again.", {
                position: "top-center",
                theme: "dark",
            });
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black pb-15 px-4 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 opacity-5 blur-3xl rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800 opacity-5 blur-3xl rounded-full animate-pulse"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <FaCar className="text-5xl text-red-600" />
                    </div>
                    <h2 className="text-5xl font-black text-white uppercase mb-3 tracking-tight">
                        List Your <span className="text-red-600">Vehicle</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Fill in the details to get your car approved and listed</p>
                </div>

                {/* Form Card */}
                <div className="relative rounded-2xl border-2 border-red-600/30 p-8 md:p-12 overflow-hidden transition-all duration-500 hover:border-red-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>

                    <form onSubmit={handleSubmit} className="relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Car Title */}
                            <div className="md:col-span-2">
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Car Title</label>
                                <input
                                    name="title"
                                    type="text"
                                    placeholder="e.g. Toyota Corolla 2020"
                                    required
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-600 outline-none transition-all"
                                />
                            </div>

                            {/* Brand */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Brand</label>
                                <input
                                    name="brand"
                                    type="text"
                                    placeholder="Toyota"
                                    required
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-600 outline-none transition-all"
                                />
                            </div>

                            {/* Model */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Model</label>
                                <input
                                    name="model"
                                    type="text"
                                    placeholder="Corolla"
                                    required
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-600 outline-none transition-all"
                                />
                            </div>

                            {/* Year */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Year</label>
                                <input
                                    name="year"
                                    type="number"
                                    placeholder="2020"
                                    required
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-600 outline-none transition-all"
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Price (৳)</label>
                                <input
                                    name="price"
                                    type="number"
                                    placeholder="18500"
                                    required
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-600 outline-none transition-all"
                                />
                            </div>

                            {/* Condition */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Condition</label>
                                <select
                                    name="condition"
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all"
                                >
                                    <option value="Used">Used</option>
                                    <option value="New">New</option>
                                    <option value="Reconditioned">Reconditioned</option>
                                </select>
                            </div>

                            {/* Fuel Type */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Fuel Type</label>
                                <select
                                    name="fuelType"
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all"
                                >
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Octane">Octane</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Electric">Electric</option>
                                </select>
                            </div>

                            {/* Transmission */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Transmission</label>
                                <select
                                    name="transmission"
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all"
                                >
                                    <option value="Automatic">Automatic</option>
                                    <option value="Manual">Manual</option>
                                </select>
                            </div>

                            {/* Mileage */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Mileage (km)</label>
                                <input
                                    name="mileage"
                                    type="number"
                                    placeholder="35000"
                                    required
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-600 outline-none transition-all"
                                />
                            </div>

                            {/* Engine Capacity */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Engine Capacity</label>
                                <input
                                    name="engineCapacity"
                                    type="text"
                                    placeholder="1.8L"
                                    required
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-600 outline-none transition-all"
                                />
                            </div>

                            {/* Color */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Color</label>
                                <input
                                    name="color"
                                    type="text"
                                    placeholder="White"
                                    required
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-600 outline-none transition-all"
                                />
                            </div>

                            {/* Country */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Country</label>
                                <input
                                    name="locationCountry"
                                    type="text"
                                    defaultValue="Bangladesh"
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all"
                                />
                            </div>

                            {/* City */}
                            <div>
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">City</label>
                                <input
                                    name="locationCity"
                                    type="text"
                                    placeholder="Dhaka"
                                    required
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-600 outline-none transition-all"
                                />
                            </div>

                            {/* Car Photo */}
                            <div className="md:col-span-2">
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Car Photo</label>
                                <div className="relative border-2 border-dashed border-gray-800 rounded-lg overflow-hidden hover:border-red-600 transition-all group">
                                    <input
                                        name="imageFile"
                                        type="file"
                                        accept="image/*"
                                        required
                                        onChange={handleImagePreview}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    />

                                    {selectedImage ? (
                                        <div className="relative">
                                            <img src={selectedImage} alt="Preview" className="w-full h-64 object-cover" />
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <p className="text-white font-bold">Click to change image</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="p-12 text-center">
                                            <FaUpload className="text-5xl text-gray-700 mx-auto mb-4 group-hover:text-red-600 transition-colors" />
                                            <p className="text-gray-500 font-semibold">Click to upload or drag and drop car photo</p>
                                            <p className="text-gray-700 text-sm mt-2">PNG, JPG up to 10MB</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">
                                <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Description</label>
                                <textarea
                                    name="description"
                                    rows="4"
                                    placeholder="Describe your car features, modifications, service history..."
                                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-600 outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Price Negotiable */}
                            <div className="md:col-span-2 flex items-center gap-3 p-4 bg-black/50 rounded-lg border border-gray-800">
                                <input
                                    name="priceNegotiable"
                                    type="checkbox"
                                    id="neg"
                                    className="w-5 h-5 accent-red-600 cursor-pointer"
                                />
                                <label htmlFor="neg" className="text-gray-300 font-semibold cursor-pointer select-none">
                                    Price is Negotiable
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="md:col-span-2 mt-6">
                                <button
                                    type="submit"
                                    disabled={uploading}
                                    className="group relative w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-black uppercase py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-2xl shadow-red-900/40 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {uploading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <FaCar className="text-xl" />
                                                Post Vehicle for Approval
                                            </>
                                        )}
                                    </span>
                                    {!uploading && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCarForm;