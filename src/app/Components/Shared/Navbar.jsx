import Link from 'next/link'
import Image from 'next/image'
import WebsiteLogo from '../../../../public/Logo.png'
import NavLink from './NavLink'
import { MdLogin } from 'react-icons/md'
import { FaUserPlus } from 'react-icons/fa'


const Navbar = () => {
    return (
        <div className="bg-black sticky top-0 z-50">
            {/* Container */}
            <div className="navbar max-w-11/12 mx-auto text-white">

                {/* LEFT */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
                        >
                            <li><NavLink href="/">Home</NavLink></li>
                            <li><NavLink href="/all-cars">All Cars</NavLink></li>
                        </ul>
                    </div>

                    <Link href="/">
                        <Image
                            src={WebsiteLogo}
                            alt="AutoNest Logo"
                            width={140}
                            height={40}
                            priority
                        />
                    </Link>
                </div>

                {/* CENTER */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/all-cars">All Cars</NavLink></li>
                        <li><NavLink href="/add-car">Add Car</NavLink></li>
                    </ul>
                </div>

                {/* RIGHT */}

                <div className="navbar-end flex gap-2 sm:gap-2">

                    <Link href="/login" className="btn btn-xs md:btn-md">
                        <MdLogin className="text-lg" />
                        Login
                    </Link>

                    <Link href="/register" className="btn btn-primary btn-xs md:btn-md">
                        <FaUserPlus className="text-lg" />
                        Register
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar
