function AboutPage() {
    return ( 
        <main className="min-h-screen justify-center m-0 bg-gray-100">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-black mb-3 sm:mb-4 leading-tight">About Us</h1>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 flex-col md:flex-row mt-4">
                <img 
                    src="/pexels-rdne-7464383.jpg" 
                    alt="Two professional movers in uniforms carefully lifting a large cardboard box together in a bright, organized living room with wooden floors and modern furniture, conveying teamwork and reliability" 
                    className="w-full max-w-xl h-auto shadow-2xl rounded-2xl hover:scale-101 transition-transform duration-300"
                    loading="lazy" 
                />
                <img 
                    src="/pexels-rdne-7464467.jpg" 
                    alt="Mover in uniform smiling while carrying a stack of boxes through a sunlit hallway with white walls and framed pictures, creating a friendly and welcoming atmosphere" 
                    className="w-full max-w-xl h-auto shadow-2xl rounded-2xl hover:scale-101 transition-transform duration-300"
                    loading="lazy" 
                />
                <img 
                    src="/pexels-rdne-7464702.jpg" 
                    alt="Team of movers loading furniture and boxes into a moving truck parked outside a suburban home on a clear day, showing cooperation and a positive, energetic mood" 
                    className="w-full max-w-xl h-auto shadow-2xl rounded-2xl hover:scale-101 transition-transform duration-300"
                    loading="lazy" 
                />
            </div>
            <div className="max-w-4xl px-5 mt-5 p-6 text-lg text-gray-800">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 leading-tight">Our Mission/Values</h2>
                <ul className="list-disc list-inside space-y-4">
                    <li className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black px-4 sm:px-6 py-2 sm:py-3">Integrity</li>
                    <li className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black px-4 sm:px-6 py-2 sm:py-3">Care</li>
                    <li className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black px-4 sm:px-6 py-2 sm:py-3">Speed</li>
                    <li className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black px-4 sm:px-6 py-2 sm:py-3">Customer Focus</li>
                </ul>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Our Story
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                Founded in 2024, MoveMate started with a simple mission: to make moving stress-free for families and businesses across Kenya. What began as a small team with one truck has grown into a trusted name in the industry.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Today, we've successfully completed over 5,000 moves and continue to set the standard for professional, reliable moving services. Our commitment to excellence has made us the go-to choice for anyone looking to relocate.
                </p>
            </div>
        </main>
     );
}

export default AboutPage;