import React from 'react';
import { Projects } from '../constants.js'; // Assuming Projects data is here

// Your ProjectCard component (should be in its own file usually, but keeping it here for clarity)
const ProjectCard = ({ project, onSelect }) => (
  <div className="bg-dark-2 rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2 transition-all duration-300 group flex flex-col">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-primary text-justify group-hover:text-primary-dark transition-colors duration-300">{project.title}</h3>
      <p className="text-justify mt-2 text-gray-400 text-sm flex-grow">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="bg-dark-3 text-gray-300 text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
       <div className="mt-6">
        <button
          onClick={() => onSelect(project)} // This calls the onSelect prop
          className="font-bold text-primary  hover:text-primary-dark transition-colors duration-300"
          aria-label={`Read more about ${project.title}`}
        >
          Read More &rarr;
        </button>
      </div>
    </div>
  </div>
);


const RecentProjects = ({ onProjectSelect }) => { // This component receives onProjectSelect as a prop
  return (
    <section id="Projects" className="py-5 bg-dark-1">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Recent <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onProjectSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;