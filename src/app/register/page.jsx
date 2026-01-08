'use client';
import React, { useContext, useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaImage, FaEye, FaEyeSlash, FaCar } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/lib/AuthContext';

const Register = () => {
    const { customCreateUserWithEmailAndPassword, customGoogleSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await customCreateUserWithEmailAndPassword(email, password, name, photo);
            if (result) {
                router.push('/');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await customGoogleSignIn();
            if (result) {
                router.push('/');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-black flex items-center justify-center px-4 relative overflow-hidden pt-10 pb-10 min-h-screen">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-red-600 opacity-5 blur-[100px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-red-800 opacity-5 blur-[100px] rounded-full animate-pulse"></div>
            </div>

            <div className="max-w-md w-full relative z-10">
                <div className="relative rounded-[2rem] border-2 border-white/10 p-6 md:p-10 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-xl"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center p-3 bg-red-600/10 rounded-2xl mb-4 border border-red-600/20">
                                <FaCar className="text-4xl md:text-5xl text-red-600" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
                                Join <span className="text-red-600">AutoNest</span>
                            </h1>
                            <p className="text-gray-400 text-sm">Create your account to get started</p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-4">
                            <div>
                                <label className="block text-red-500 text-[10px] font-black uppercase mb-2 ml-1 tracking-widest">Full Name</label>
                                <div className="relative group">
                                    <input type="text" name="name" required placeholder="Enter Your Full Name" className="w-full bg-black/50 text-white border-2 border-white/5 py-3 px-3 rounded-xl focus:border-red-600 focus:bg-black outline-none transition-all text-sm placeholder:text-gray-700 font-medium relative z-10" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-red-500 text-[10px] font-black uppercase mb-2 ml-1 tracking-widest">Photo URL</label>
                                <div className="relative group">
                                    <input type="text" name="photo" placeholder="Enter Profile Image URL" className="w-full bg-black/50 text-white border-2 border-white/5 py-3 px-3 rounded-xl focus:border-red-600 focus:bg-black outline-none transition-all text-sm placeholder:text-gray-700 font-medium relative z-10" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-red-500 text-[10px] font-black uppercase mb-2 ml-1 tracking-widest">Email Address</label>
                                <div className="relative group">
                                    <input type="email" name="email" required placeholder="Enter Your Email Address" className="w-full bg-black/50 text-white border-2 border-white/5 py-3 px-3 rounded-xl focus:border-red-600 focus:bg-black outline-none transition-all text-sm placeholder:text-gray-700 font-medium relative z-10" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-red-500 text-[10px] font-black uppercase mb-2 ml-1 tracking-widest">Password</label>
                                <div className="relative group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        required
                                        placeholder="Create A Strong Password"
                                        className="w-full bg-black/50 text-white border-2 border-white/5 py-3 px-3 pr-12 rounded-xl focus:border-red-600 focus:bg-black outline-none transition-all text-sm placeholder:text-gray-700 font-medium relative z-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-red-600 transition-colors z-20"
                                    >
                                        {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all duration-300 active:scale-95 shadow-xl shadow-red-900/20 uppercase tracking-widest text-sm mt-4 cursor-pointer">
                                Create Account
                            </button>

                            <div className="flex items-center gap-3 my-6">
                                <div className="flex-1 h-[1px] bg-white/10"></div>
                                <span className="text-gray-400 text-[10px] font-bold uppercase">OR</span>
                                <div className="flex-1 h-[1px] bg-white/10"></div>
                            </div>

                            <button type="button" onClick={handleGoogleLogin} className="flex items-center justify-center gap-3 w-full bg-transparent hover:bg-red-600 border-2 border-red-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 group shadow-lg cursor-pointer">
                                <div className="bg-white p-1 rounded-full group-hover:bg-transparent transition-colors">
                                    <FcGoogle className="text-xl" />
                                </div>
                                <span className="text-sm">Sign Up with Google</span>
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-gray-500 text-xs font-bold">
                                Already have an account?{' '}
                                <Link href="/login" className="text-red-600 font-black hover:text-red-500 transition-colors ml-1 uppercase">
                                    Login Here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
