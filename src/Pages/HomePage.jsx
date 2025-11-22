
function HomePage() {
    return ( 
       <main className="bg-cover bg-center bg-no-repeat h-screen relative" style={{ backgroundImage: "url('/src/assets/african-worker-in-a-movers-company.webp')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white p-6 relative z-100 bg-opacity-50">Welcome to MoveEasy</h1>
            <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-white p-4 relative z-100 bg-opacity-50 ">Your trusted partner for seamless moving solutions.</p>
        </div>
        <div className="m-4">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white p-6 relative z-100 bg-opacity-50">Why Choose Us:</h2>
          <div className="flex flex-wrap gap-4">
            <p className="text-xl md:text-2xl lg:text-2xl font-bold text-white p-3 relative z-100 bg-opacity-50 bg-gray-400 rounded-full my-2 cursor-pointer">Fast & Reliable</p>
            <p className="text-xl md:text-2xl lg:text-2xl font-bold text-white p-3 relative z-100 bg-opacity-50 bg-gray-400 rounded-full my-2 cursor-pointer">Affordable Rates</p>
            <p className="text-xl md:text-2xl lg:text-2xl font-bold text-white p-3 relative z-100 bg-opacity-50 bg-gray-400 rounded-full my-2 cursor-pointer">Professional Service</p>
          </div>
        </div>
       </main>
     );
}

export default HomePage;