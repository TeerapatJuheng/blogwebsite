
const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-bold mb-4">Feature One</h3>
            <p>Some description about feature one. It's awesome and worth checking out.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-bold mb-4">Feature Two</h3>
            <p>Some description about feature two. It adds great value and functionality.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-bold mb-4">Feature Three</h3>
            <p>Some description about feature three. Users love this feature a lot.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
