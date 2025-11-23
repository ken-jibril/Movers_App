import { Link } from "react-router-dom";
import { FaEnvelope, FaHome, FaInfoCircle, FaTruck, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-lg sticky top-0 left-0 w-full backdrop-blur-lg z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl" onClick={closeMenu}>
                    <FaTruck className="scale-x-[-1] text-2xl text-blue-600"/>
                    <span className="text-gray-900">MoveMate</span>
                </Link>

                {/* Desktop Navigation - WITH YOUR HOVER EFFECTS */}
                <nav className="hidden lg:flex items-center gap-3">
                    <Link to="/" className="flex items-center justify-center gap-2 group px-3 py-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300">
                        <FaHome size={25}/>
                        <span className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">Home</span>
                    </Link>
                    <Link to="/about" className="flex items-center justify-center gap-2 group px-3 py-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300">
                        <FaInfoCircle size={25} />
                        <span className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">About</span>
                    </Link>
                    <Link to="/contact" className="flex items-center justify-center gap-2 group px-3 py-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300">
                        <FaEnvelope size={25}/> 
                        <span className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">Contact</span>
                    </Link>
                </nav>

                {/* Desktop CTA Button - WITH YOUR HOVER EFFECT */}
                <Link to="/contact" className="hidden lg:flex items-center gap-2 font-medium text-gray-900 hover:text-blue-600 group transition-colors">
                    Get in Touch
                    <FaArrowRight size={15} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMenu}
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <nav className="flex flex-col gap-2 px-4 pb-4 bg-gray-50">
                    <Link 
                        to="/" 
                        className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={closeMenu}
                    >
                        <FaHome size={20}/>
                        <span className="font-medium">Home</span>
                    </Link>
                    <Link 
                        to="/about" 
                        className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={closeMenu}
                    >
                        <FaInfoCircle size={20} />
                        <span className="font-medium">About</span>
                    </Link>
                    <Link 
                        to="/contact" 
                        className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={closeMenu}
                    >
                        <FaEnvelope size={20}/> 
                        <span className="font-medium">Contact</span>
                    </Link>
                    <Link 
                        to="/contact" 
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mt-2"
                        onClick={closeMenu}
                    >
                        Get in Touch
                        <FaArrowRight size={15} />
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;