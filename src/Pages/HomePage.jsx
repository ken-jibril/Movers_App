
function HomePage() {
    return ( 
       <main className="bg-cover bg-center h-screen flex relative" style={{ backgroundImage: "url('/src/assets/african-worker-in-a-movers-company.webp')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white p-6 relative z-100 bg-opacity-50">Welcome to MoveEasy</h1>
            <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-white p-4 relative z-100 bg-opacity-50 ">Your trusted partner for seamless moving solutions.</p>
        </div>
        <div className="">
          <span>Reliable</span>
          <span></span>
          <span></span>
        </div>
       </main>
     );
}

export default HomePage;