import backgroundImage from '../assets/african-worker-in-a-movers-company.webp';

function HomePage() {
    return ( 
       <main 
          className="bg-cover bg-center bg-no-repeat h-screen relative flex"
          style={{ backgroundImage: `url(${backgroundImage})` }}
       >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45"></div>
          
          {/* Content container - centered vertically and horizontally */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
              
              {/* Hero Section */}
              <div className="text-center mb-8 sm:mb-12">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                      Welcome to MoveEasy
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white px-2 sm:px-4">
                      Your trusted partner for seamless moving solutions.
                  </p>
              </div>
              
              {/* Features Section */}
              <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 sm:mb-6">
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
     );
}

export default HomePage;