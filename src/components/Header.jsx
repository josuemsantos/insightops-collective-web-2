import React from 'react';
import { useState } from 'react';

const Header = ({ onNavigation }) => { // Header component for the application
    // State to manage the mobile navigation menu 
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [ // Navigation links for the header
        { href: '#Hero', label: 'Home' },
        { href: '#Projects', label: 'Projects' },
        { href: '#Technologies', label: 'Technologies' },
        { href: '#Team', label: 'Team' }
    ];

    return (
    <header className="bg-dark-1/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container flex items-center mx-auto px-6 py-4 justify-between gap-x-12">
        <a href="#Hero" onClick={onNavigation} className="flex items-center gap-x-2 text-2xl font-black text-primary">
          <img src="./insightops-collective-icon-yellow.svg" alt="InsightOps Collective Icon" className="inline-block w-12 h-12 mr-2" />
          InsightOps Collective
        </a>
        
        <nav className="relative hidden md:flex items-center space-x-8 gap-x-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onNavigation} // Callback to handle navigation
              className="link-primary hover:link-primary-hover transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-secondary font-bold py-2 px-4 rounded-md hover:text-primary-dark transition-colors duration-300"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block mr-2">
            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
          </svg>
            Contact 
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-dark-2">
          <nav className="flex flex-col items-center space-y-4 px-6 pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close the menu on navigation
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)} // Close the menu on navigation
              className="bg-primary text-secondary font-bold py-2 px-4 rounded-md w-full text-center hover:bg-primary-dark transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6v inline-block w-8 h-8 mr-2">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
              </svg>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
    );
}

export default Header;