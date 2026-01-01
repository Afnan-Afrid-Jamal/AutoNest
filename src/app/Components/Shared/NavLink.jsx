"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const path = usePathname();
    const isActive = path === href;
    return (
        <Link
            href={href}
            className={`px-3 py-2 transition-colors duration-200 ${isActive && "border-b-2 border-primary text-red-500 font-semibold"
                }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;