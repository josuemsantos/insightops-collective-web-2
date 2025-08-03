import React from "react";

// Try in the future to use Tailwind CSS for styling for adding a background image and responsive design

const Hero  = () => { // Hero component for the landing page
    // This component displays a hero section with a title, subtitle, and call-to-action button
    return (
      <section id="Hero" className="bg-dark-1 text-white">
        <div className="container mx-auto px-6 py-25 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wide">
            Expert Freelance Services
            <span className="block text-primary mt-2">& Support Equipment</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-400">
            Modernizing your infrastructure with cutting-edge technologies and a dedicated team of certified professionals.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="bg-primary text-secondary text-lg font-bold py-4 px-8 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105 duration-300 inline-block"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    );
}

export default Hero;