const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">About Us</h2>
          </div>

          <div className="mt-8 text-gray-700">
            <h3 className="text-lg font-semibold mb-4">Our Vision</h3>
            <p className="mb-6">At ElectraTech, our vision is to be at the forefront of technology and electronics. We aim to empower individuals with the latest and greatest products and information to enhance their digital lives.</p>

            <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
            <p className="mb-6">We are committed to providing a curated selection of top-tier brands like Apple, Samsung, Sony, Google, Intel, Microsoft, and more. Our mission is to deliver expert insights, reviews, and guides to help you make informed decisions about your tech investments.</p>

            <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Wide range of the latest tech products.</li>
              <li>Expert reviews and buying guides.</li>
              <li>Dedicated to your tech journey.</li>
              <li>Customer-centric service and support.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>If you have any questions or inquiries, please do not hesitate to <a href="mailto:rntprince@gmail.com" className="text-blue-500">contact us</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
