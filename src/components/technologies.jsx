import React from 'react';
import { Technologies as TECHNOLOGIES } from '../constants.js';

const Technologies = () => { // Ensure TECHNOLOGIES is provided
  return (
    <section id="Technologies" className="py-20 bg-dark-2 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core <span className="text-primary">Technologies</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {TECHNOLOGIES.map(({ name, Icon }) => ( // Ensure each technology has a name and Icon
            <div key={name} className="flex flex-col items-center justify-center p-4 group">
              <div className="bg-dark-1 p-6 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                {Icon && <Icon className="h-16 w-16 text-primary group-hover:text-dark-1 transition-colors duration-300" />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-300">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;