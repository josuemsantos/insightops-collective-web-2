import React from "react";
import { TEAM_MEMBERS } from '../constants.js';

const TeamMemberCard = ({ member }) => ( // Ensure member has imageUrl, name, and role
    <div className="text-center group">
        <div className="relative inline-block">
            <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-dark-3 group-hover:border-primary transition-all duration-300"
            />
             <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-200">{member.name}</h3>
        <p className="text-primary">{member.role}</p>
    </div>
);

const Team = () => { // Ensure TEAM_MEMBERS is provided
  return (
    <section id="Team" className="py-20 bg-dark-1">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet the <span className="text-primary">Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {TEAM_MEMBERS.map(member => ( // Ensure each member has an id, imageUrl, name, and role
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
