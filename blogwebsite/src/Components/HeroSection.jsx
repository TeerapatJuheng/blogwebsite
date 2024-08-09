
const HeroSection = () => {
  return (
    <section id="home" className="bg-blue-500 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-7xl font-bold animate-bounce">
        Welcome to My Website
      </h1>
      <p className="text-xl md:text-2xl mt-4 animate-fade-in">
        Discover amazing content and features.
      </p>
      <a href="#features" className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
        Learn More
      </a>
    </section>
  );
};

export default HeroSection;
