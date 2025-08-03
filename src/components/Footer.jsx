import React from "react";
import { SOCIAL_LINKS } from "../constants";

const Footer = () => { // Ensure SOCIAL_LINKS is provided and has name, url, and Icon
  return (
    <footer id="contact" className="bg-dark-2 border-t border-dark-3">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} InsightOps Collective. All rights reserved.
          </p>
          <div className="flex mt-4 sm:mt-0 space-x-6">
            {SOCIAL_LINKS.map(({ name, url, Icon }) => ( // Show each social link with name, url, and Icon
              <a 
                key={name}
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label={name}
              >
                {Icon && <Icon className="h-6 w-6" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;