const Hero = () => {
    return (
      <div
        className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url('/university.avif')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
            World&apos;s Biggest University
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto">
            Making website is now one of the easiest things in the world. You just need to learn HTML, CSS, JavaScript and you are good to go.
          </p>
  
          <button className="mt-8 px-8 py-3 bg-mainColor text-white rounded-full hover:bg-white hover:text-black transition">
            Visit Us to Know More
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  