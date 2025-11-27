// components/Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">MoveMate</h3>
                        <p className="text-gray-400 mb-4">
                            Your trusted partner for seamless moving solutions across Kenya.
                        </p>
                        <div className="flex gap-4">
                            <a 
                                href="https://www.facebook.com/share/1C3pUQWvfZ/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                aria-label="Visit our Facebook page"
                            >
                                <FaFacebook className="text-xl" />
                            </a>
                            <a 
                                href="https://twitter.com/yourhandle" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                                aria-label="Visit our Twitter profile"
                            >
                                <FaTwitter className="text-xl" />
                            </a>
                            <a 
                                href="https://www.instagram.com/movemate_kenya?igsh=dTdoYzczd3poaGo1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                                aria-label="Visit our Instagram profile"
                            >
                                <FaInstagram className="text-xl" />
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <FaPhone className="text-blue-500" />
                                <a href="tel:+254705926047" className="hover:text-white transition-colors">
                                    +254705926047
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-blue-500" />
                                <a href="mailto:movematekenya@gmail.com" className="hover:text-white transition-colors">
                                    movematekenya@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                                <span>St.Bakhita Catholic Mukuru, Nairobi City, Kenya</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy;2025 MoveMate. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;