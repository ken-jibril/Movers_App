import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Footer from "../components/footer";

function ContactPage() {
    return ( 
        <>
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    {/* Page Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-900 mb-8 sm:mb-12 leading-tight">
                        Contact Us
                    </h1>
                    
                    {/* Contact Information Cards */}
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        
                        {/* Phone Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <FaPhone className="text-blue-600 text-xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                            </div>
                            <a 
                                href="tel:+254712345678" 
                                className="text-lg text-blue-600 hover:text-blue-800 font-semibold block mb-2"
                            >
                                +254705926047
                            </a>
                            <p className="text-sm text-gray-600">
                                Available 24/7 for your moving needs
                            </p>
                        </div>
                        
                        {/* Email Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaEnvelope className="text-green-600 text-xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                            </div>
                            <a 
                                href="mailto:movematekenya@gmail.com" 
                                className="text-lg text-blue-600 hover:text-blue-800 font-semibold block mb-2"
                            >
                                movematekenya@gmail.com
                            </a>
                            <p className="text-sm text-gray-600">
                                We'll respond within 24 hours
                            </p>
                        </div>
                        
                        {/* Location Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-orange-600 text-xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Visit Us</h3>
                            </div>
                            <p className="text-lg text-gray-700 font-semibold mb-2">
                                Nairobi, Kenya
                            </p>
                            <p className="text-sm text-gray-600">
                                123 Moving Street, Westlands
                            </p>
                        </div>
                        
                        {/* Business Hours Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <FaClock className="text-purple-600 text-xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                            </div>
                            <p className="text-base text-gray-700 mb-1">
                                <span className="font-semibold">Mon - Fri:</span> 8:00 AM - 6:00 PM
                            </p>
                            <p className="text-base text-gray-700 mb-1">
                                <span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM
                            </p>
                            <p className="text-base text-gray-700">
                                <span className="font-semibold">Sunday:</span> Closed
                            </p>
                        </div>
                    </div>
                    
                    {/* Call to Action Section */}
                    <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Ready to Move?
                        </h2>
                        <p className="text-lg mb-6">
                            Call us now or send us an email.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="tel:+254705926047"
                                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <FaPhone />
                                Call Now
                            </a>
                            <a 
                                href="mailto:movematekenya@gmail.com"
                                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                <FaEnvelope />
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    );
}

export default ContactPage;