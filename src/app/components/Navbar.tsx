"use client"
import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import Link from "next/link";
import Image from 'next/image';
const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="shadow-md bg-gray-50 py-4 px-8 lg:px-20 flex h-20 justify-between items-center sticky top-0 z-50">
            {/* Brand Name */}
            <a href="#" className="flex items-center justify-center text-2xl font-bold text-indigo-600"> <Image alt='logo' width={100} height={100} className='mix-blend-multiply bg-transparent' src={"/image.png"} />Harward.</a>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-8">
                <li><Link href="/" className="text-lg text-gray-700 hover:text-indigo-600">Home</Link></li>
                <li><Link href="#about" className="text-lg text-gray-700 hover:text-indigo-600">About</Link></li>
                <li><Link href="#courses" className="text-lg text-gray-700 hover:text-indigo-600">Courses</Link></li>
            </ul>

            {/* Contact Button */}
            <a
                href="#contact"
                className="hidden lg:inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
                Contact
            </a>

            {/* Hamburger Icon for Mobile */}
            <button className="lg:hidden text-3xl text-gray-700" onClick={toggleMenu}>
                <i className="bx bx-menu"></i>
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="font-bold lg:hidden bg-white shadow-md p-6 absolute w-full top-16 left-0 z-50"
                >
                    <ul className="flex flex-col bg-white gap-6">
                        <li>
                            <a href="#home" className="text-lg text-gray-700 hover:text-indigo-600" onClick={closeMenu}>Home</a>
                        </li>
                        <li>
                            <a href="#about" className="text-lg text-gray-700 hover:text-indigo-600" onClick={closeMenu}>About</a>
                        </li>
                        <li>
                            <a href="#services" className="text-lg text-gray-700 hover:text-indigo-600" onClick={closeMenu}>Services</a>
                        </li>
                        <li>
                            <a href="#projects" className="text-lg text-gray-700 hover:text-indigo-600" onClick={closeMenu}>Projects</a>
                        </li>
                        <li>
                            <a href="#skills" className="text-lg text-gray-700 hover:text-indigo-600" onClick={closeMenu}>Skills</a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="block w-full text-center px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                                onClick={closeMenu}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;