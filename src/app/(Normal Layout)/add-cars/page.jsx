"use client";
import React, { useState } from 'react';
import { uploadImage } from '@/lib/Utils/uploadPhoto';
import { createCar } from '@/lib/Utils/actions/carActions';
import { toast } from 'react-toastify';
import { FaCar, FaUpload, FaTimes } from 'react-icons/fa';

const AddCarForm = () => {
    const [uploading, setUploading] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);

    // Maximum image limit
    const MAX_IMAGES = 3;
    const MAX_FILE_SIZE = 1024 * 1024; // 1MB in bytes

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        // ১. টোটাল সংখ্যা চেক করা
        if (imageFiles.length + files.length > MAX_IMAGES) {
            toast.error(`You can only upload a maximum of ${MAX_IMAGES} images.`, {
                position: "top-center",
                theme: "dark",
            });
            return;
        }

        files.forEach(file => {
            // নতুন লজিক: ১ মেগাবাইট সাইজ চেক করা
            if (file.size > MAX_FILE_SIZE) {
                toast.error(`"${file.name}" is too large! Maximum size is 1MB.`, {
                    position: "top-center",
                    theme: "dark",
                });
                return;
            }

            const reader = new FileReader();

            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;

                img.onload = () => {
                    // ২. ল্যান্ডস্কেপ ভ্যালিডেশন (চওড়া কি না চেক করা)
                    if (img.width > img.height) {
                        setSelectedImages((prev) => [...prev, event.target.result]);
                        setImageFiles((prev) => [...prev, file]);
                    } else {
                        toast.error(`"${file.name}" is not a landscape image!`, {
                            position: "top-center",
                            theme: "dark",
                        });
                    }
                };
            };

            reader.readAsDataURL(file);
        });
    };

    const removeImage = (index) => {
        setSelectedImages((prev) => prev.filter((_, i) => i !== index));
        setImageFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        if (imageFiles.length === 0) {
            toast.warn("Please select at least one image", { position: "top-center", theme: "dark" });
            return;
        }

        try {
            setUploading(true);

            // ৩. ইমেজ আপলোড লজিক
            const uploadPromises = imageFiles.map(file => uploadImage(file));
            const imageUrls = await Promise.all(uploadPromises);

            if (imageUrls.includes(null)) {
                toast.error("Image upload failed!", { position: "top-center", theme: "dark" });
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
                images: imageUrls,
                sellerId: "001",
                sellerName: "user",
                sellerEmail: "afnan@gmail.com",
                sellerPhone: "01444444444444",
                status: "pending",
                createdAt: new Date().toLocaleString('en-GB'),
            };

            const response = await createCar(carData);

            if (response.success) {
                toast.success(response.message, { position: "top-center", theme: "dark" });
                form.reset();
                setSelectedImages([]);
                setImageFiles([]);
            } else {
                toast.error(response.message, { position: "top-center", theme: "dark" });
            }

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!", { position: "top-center", theme: "dark" });
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black pb-15 px-4 relative overflow-hidden">
            <div className="absolute inset-0"></div>

            <div className="max-w-5xl mx-auto relative z-10 py-10">
                <div className="text-center mb-12">
                    <FaCar className="text-5xl text-red-600 mx-auto mb-4" />
                    <h2 className="text-5xl font-black text-white uppercase tracking-tight">
                        List Your <span className="text-red-600">Vehicle</span>
                    </h2>
                </div>

                <div className="relative rounded-2xl border-2 border-red-600/30 p-8 md:p-12 bg-gradient-to-br from-gray-600 to-black shadow-2xl">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

                        <div className="md:col-span-2">
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Car Title</label>
                            <input name="title" type="text" required placeholder="e.g. Toyota Corolla Altis 2022 for sale" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all" />
                        </div>

                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Brand</label>
                            <input name="brand" type="text" required placeholder="e.g. Toyota" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Model</label>
                            <input name="model" type="text" required placeholder="e.g. Corolla" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Year</label>
                            <input name="year" type="number" required placeholder="e.g. 2022" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Price (৳)</label>
                            <input name="price" type="number" required placeholder="e.g. 2500000" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Condition</label>
                            <select name="condition" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all">
                                <option value="" disabled selected>Select Condition</option>
                                <option value="Used">Used</option>
                                <option value="New">New</option>
                                <option value="Reconditioned">Reconditioned</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Fuel Type</label>
                            <select name="fuelType" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all">
                                <option value="" disabled selected>Select Fuel Type</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Octane">Octane</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Electric">Electric</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Transmission</label>
                            <select name="transmission" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all">
                                <option value="" disabled selected>Select Transmission</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Mileage (km)</label>
                            <input name="mileage" type="number" required placeholder="e.g. 15000" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Engine Capacity</label>
                            <input name="engineCapacity" type="text" required placeholder="e.g. 1500cc" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Color</label>
                            <input name="color" type="text" required placeholder="e.g. Pearl White" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Country</label>
                            <input name="locationCountry" type="text" defaultValue="Bangladesh" placeholder="Country" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">City</label>
                            <input name="locationCity" type="text" required placeholder="e.g. Dhaka" className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all" />
                        </div>

                        {/* Image Section */}
                        <div className="md:col-span-2">
                            <div className="flex justify-between items-center mb-1">
                                <label className="text-red-600 text-sm font-bold uppercase tracking-wide">Car Photos (Max 3)</label>
                                <span className={`text-xs font-bold ${imageFiles.length === MAX_IMAGES ? 'text-red-500' : 'text-gray-500'}`}>
                                    {imageFiles.length} / {MAX_IMAGES} Selected
                                </span>
                            </div>

                            <p className="text-gray-500 text-[10px] md:text-[11px] uppercase tracking-widest mb-4 font-bold flex flex-wrap items-center gap-3 gap-y-2">
                                <span className="flex gap-2">

                                    Recommended: <span className="text-white">1200 x 800 px </span>
                                </span>
                                <span className="hidden sm:inline text-gray-700">•</span>
                                <span> Max: <span className="text-white">1500 x 1000 </span></span>
                                <span className="hidden sm:inline text-gray-700">•</span>
                                <span> Ratio <span className="text-white">3:2 Landscape </span></span>
                                <span className="hidden sm:inline text-gray-700">•</span>
                                <span> Max Size <span className="text-white">1MB </span></span>
                            </p>

                            <div className="relative border-2 border-dashed border-gray-800 rounded-lg p-6 min-h-[180px] flex flex-wrap gap-4 items-center justify-center hover:border-red-600 transition-all group">
                                {imageFiles.length < MAX_IMAGES && (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                                    />
                                )}

                                {selectedImages.length > 0 ? (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full z-30">
                                        {selectedImages.map((img, index) => (
                                            <div key={index} className="relative group/img h-24 rounded-xl overflow-hidden border border-red-600/30">
                                                <img src={img} alt="Preview" className="w-full h-full object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(index)}
                                                    className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                                                >
                                                    <FaTimes size={10} />
                                                </button>
                                            </div>
                                        ))}
                                        {imageFiles.length < MAX_IMAGES && (
                                            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-800 rounded-xl h-24 text-gray-500">
                                                <FaUpload size={16} />
                                                <span className="text-[10px] mt-1 font-bold">Add More</span>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-center pointer-events-none">
                                        <FaUpload className="text-4xl text-gray-700 mx-auto mb-2 group-hover:text-red-600 transition-colors" />
                                        <p className="text-gray-500 text-sm font-semibold">Click to upload landscape images</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-red-600 text-sm font-bold mb-2 uppercase tracking-wide">Description</label>
                            <textarea name="description" rows="4" placeholder="Describe your car's features, history, and current condition..." className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-all resize-none"></textarea>
                        </div>

                        <div className="md:col-span-2 flex items-center gap-3 p-4 bg-black/50 rounded-lg border border-gray-800">
                            <input name="priceNegotiable" type="checkbox" id="neg" className="w-5 h-5 accent-red-600 cursor-pointer" />
                            <label htmlFor="neg" className="text-gray-300 font-semibold cursor-pointer">Price is Negotiable</label>
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <button
                                type="submit"
                                disabled={uploading}
                                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-black uppercase py-5 rounded-xl transition-all hover:scale-[1.01] disabled:opacity-50"
                            >
                                {uploading ? "Submitting..." : "Post Vehicle for Approval"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCarForm;