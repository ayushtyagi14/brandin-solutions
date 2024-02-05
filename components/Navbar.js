// Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { dmSans } from '@/app/layout';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-[#EFFAFD] py-6">
            <div className="w-[95%] mx-auto flex flex-row items-center justify-between">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <span className={`${dmSans.className} text-[#060640] text-2xl uppercase font-extrabold`}>Brandin</span>
                    </Link>
                </div>

                {/* Navigation Links - Desktop */}
                <div className="hidden md:flex space-x-4">
                    <Link href="/">
                        <span className="text-black">Services</span>
                    </Link>
                    <Link href="/">
                        <span className="text-black">About</span>
                    </Link>
                    <Link href="/">
                        <span className="text-black">Contact Us</span>
                    </Link>
                    {/* Add more links as needed */}
                </div>

                {/* Social Icons */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-black">
                        <img src="/instagram-icon.png" alt="Social Icon" width={28} />
                    </a>
                    <a href="#" className="text-black">
                        <img src="/twitter-icon.png" alt="Social Icon" width={28} />
                    </a>
                    <a href="#" className="text-black">
                        <img src="/facebook-icon.png" alt="Social Icon" width={28} />
                    </a>
                    {/* Add more social icons as needed */}
                </div>

                {/* Hamburger Menu - Mobile */}
                <div className="md:hidden">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-black p-2 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        &#9776;
                    </motion.button>
                </div>

                {/* Mobile Menu - Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 right-0 bg-[#EFFAFD] w-full p-4 z-[999]">
                        <Link href="/">
                            <span className="text-black block mb-2">Services</span>
                        </Link>
                        <Link href="/">
                            <span className="text-black block mb-2">About</span>
                        </Link>
                        <Link href="/">
                            <span className="text-black block mb-2">Contact Us</span>
                        </Link>
                        <div className="flex space-x-4 justify-center">
                            <a href="#" className="text-black">
                                <img src="/instagram-icon.png" alt="Social Icon" width={20} />
                            </a>
                            <a href="#" className="text-black">
                                <img src="/twitter-icon.png" alt="Social Icon" width={20} />
                            </a>
                            <a href="#" className="text-black">
                                <img src="/facebook-icon.png" alt="Social Icon" width={20} />
                            </a>
                            {/* Add more social icons as needed */}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
