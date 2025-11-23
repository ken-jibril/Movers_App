import backgroundImage from '../assets/african-worker-in-a-movers-company.webp';
import { Link } from 'react-router-dom';

function HomePage() {
    return ( 
      <>
        <main 
          className="bg-cover bg-center bg-no-repeat h-screen relative flex justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45"></div>
          
          {/* Content container - centered */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
              
              {/* Hero Section */}
              <div className="mb-8 sm:mb-12">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                      Welcome to MoveMate
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white px-2 sm:px-4 mb-8">
                      Your trusted partner for seamless moving solutions.
                  </p>
                  
                  {/* Call to Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                      <Link 
                          to="/contact"
                          className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-all text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                          Let's Talk
                      </Link>
                      <Link 
                          to="/about"
                          className="bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full hover:bg-white/30 transition-all text-lg border-2 border-white"
                      >
                          Learn More
                      </Link>
                  </div>
              </div>
              
              {/* Features Section */}
              <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
                      Why Choose Us
                  </h2>
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                      <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all cursor-pointer">
                          ⚡ Fast & Reliable
                      </span>
                      <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all cursor-pointer">
                          💰 Affordable Rates
                      </span>
                      <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all cursor-pointer">
                          ⭐ Professional Service
                      </span>
                  </div>
              </div>
          </div>
        </main>
      </>
     );
}

export default HomePage;