import ImageGallery from '@/app/Components/Car Slider/ImageGallery';
import { dbConnect } from '@/lib/Utils/actions/dbConnect';
import { ObjectId } from 'mongodb';
import {
    FaGasPump, FaCogs, FaTachometerAlt,
    FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt,
    FaCheckCircle, FaCalendarAlt, FaPalette,
    FaCarSide,
    FaCar
} from 'react-icons/fa';

const CarDetails = async ({ params }) => {
    const { id } = await params;
    const carCollection = dbConnect("AllCars");
    const car = await carCollection.findOne({ _id: new ObjectId(id) });

    if (!car) return <div className="p-10 text-center text-red-600 font-bold">Car Not Found!</div>;

    // সপেক্স এর জন্য হেল্পার কম্পোনেন্ট
    const SpecItem = ({ icon: Icon, label, value }) => (
        <div className="flex flex-col items-center gap-4 p-4 bg-[#1a1a1a] border border-gray-800 rounded-xl">
            <div className="text-red-600 text-xl">
                <Icon />
            </div>
            <div>
                <p className="text-xs text-center text-gray-500 uppercase font-bold tracking-wider">{label}</p>
                <p className="text-white text-center font-semibold">{value || "N/A"}</p>
            </div>
        </div>
    );

    return (
        <div className='bg-black'>
            <div className="min-h-screen text-white pb-20 max-w-11/12 mx-auto">

                {/* ১. টপ হেডার (টাইটেল ও প্রাইস) - added extra padding and margin */}
                <div className="bg-[#111] border-b border-red-900/30 pt-16 pb-12 mb-12">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div>
                                <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Listing ID: {car._id.toString().slice(-6)}</span>
                                <h1 className="text-3xl md:text-5xl font-black uppercase italic mt-3 leading-none">
                                    {car.year} {car.brand} <span className="text-red-600">{car.model}</span>
                                </h1>
                                <div className="flex items-center gap-4 mt-6 text-gray-400">
                                    <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-500" /> {car.locationCity}, Bangladesh</span>
                                    <span className="h-4 w-px bg-gray-700"></span>
                                    <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase italic">{car.condition}</span>
                                </div>
                            </div>
                            <div className="bg-red-600 p-6 rounded-tl-3xl rounded-br-3xl inline-block shadow-lg">
                                <p className="text-xs text-black font-black uppercase mb-1">Asking Price</p>
                                <p className="text-3xl font-black text-white">৳ {car.price?.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">


                        <div className="lg:col-span-8 space-y-16">

                            {/* Image Gallery Section */}
                            <div className="bg-[#111] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl mb-12">
                                <ImageGallery images={car.images} title={car.title} />
                            </div>

                            {/* Specs Grid Section - added vertical padding */}
                            <div className="py-10 border-y border-gray-800/50">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <SpecItem icon={FaCarSide} label="Brand" value={car?.brand} />
                                    <SpecItem icon={FaCar} label="Model" value={car?.model} />
                                    <SpecItem icon={FaTachometerAlt} label="Mileage" value={`${car.mileage?.toLocaleString()} KM`} />
                                    <SpecItem icon={FaGasPump} label="Fuel Type" value={car.fuelType} />
                                    <SpecItem icon={FaCogs} label="Transmission" value={car.transmission} />
                                    <SpecItem icon={FaCalendarAlt} label="Year" value={car.year} />
                                    <SpecItem icon={FaPalette} label="Color" value={car.color} />
                                    <SpecItem icon={FaCheckCircle} label="Engine" value={car.engineCapacity} />
                                </div>
                            </div>

                            {/* Description Section - added extra margin-top */}
                            <div className="bg-[#111] p-10 rounded-3xl border border-gray-800 mt-12 shadow-xl">
                                <h3 className="text-2xl px-2 font-bold mb-8 flex items-center gap-4">
                                    Details Information
                                </h3>
                                <p className="text-gray-400 px-2 text-lg leading-relaxed whitespace-pre-line">
                                    {car.description}
                                </p>
                            </div>
                        </div>

                        {/* ডান পাশ (Seller and Call to Action) - ৪ কলাম (Sticky) */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-10 space-y-8">

                                {/* Seller Card */}
                                <div className="bg-[#111] p-8 rounded-3xl border border-red-600/20 shadow-xl overflow-hidden relative">
                                    <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-tighter">Verified</div>

                                    <h4 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-8">Listed By</h4>
                                    <div className="flex items-center gap-5 mb-10">
                                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl font-black italic shadow-lg shadow-red-600/20">
                                            {car.sellerName?.charAt(0) || "S"}
                                        </div>
                                        <div>
                                            <h5 className="text-2xl font-bold text-white uppercase">{car.sellerName}</h5>
                                            <p className="text-gray-500 text-sm">Joined {car.createdAt?.split('-')[0]}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        {car.sellerPhone ? (
                                            <>
                                                <a
                                                    href={`tel:${car.sellerPhone}`}
                                                    className="flex items-center justify-center gap-3 bg-white text-black py-5 rounded-xl font-black hover:bg-red-600 hover:text-white transition-all duration-300 group"
                                                >
                                                    <FaPhoneAlt className="group-hover:animate-bounce" /> {car.sellerPhone}
                                                </a>
                                                <a
                                                    href={`https://wa.me/${car.sellerPhone?.replace(/\+/g, '')}`}
                                                    target="_blank"
                                                    className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-xl font-black hover:opacity-90 transition-all shadow-lg"
                                                >
                                                    <FaWhatsapp size={24} /> WhatsApp Message
                                                </a>
                                            </>
                                        ) : (
                                            <p className="text-center text-gray-500 italic py-4">Phone number not provided</p>
                                        )}
                                    </div>
                                </div>

                                {/* Safety Tips */}
                                <div className="p-8 border border-gray-800 rounded-3xl bg-black/40">
                                    <h5 className="text-red-500 font-bold mb-4 flex items-center gap-2 italic underline text-sm uppercase">Safety Tips for Buyers:</h5>
                                    <ul className="text-xs text-gray-500 space-y-3 list-disc pl-5 italic">
                                        <li>Check the car in person before paying.</li>
                                        <li>Test drive the car in a safe area.</li>
                                        <li>Verify all legal documents carefully.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;