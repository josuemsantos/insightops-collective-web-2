import React from 'react';
import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/hero.jsx';
import RecentProjects from './components/recentProjects.jsx';
import Technologies from './components/technologies.jsx';
import Team from './components/team.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/contact.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(() => (null)); //inicialize state to null

  const handleSelectProject = (Project) => {// Function to handle project selection
    setSelectedProject(Project);
    window.scrollTo(0, 0);
  };

  const handleGoBack = () => { // Function to handle going back to the project list section
    setSelectedProject(null);
  };
  
  return (
    <div className="bg-dark-1 min-h-screen text-gray-200">
      <Header onNavigation={handleGoBack}/> 
      <main>
        {selectedProject ? ( // Conditional rendering based on selected project
          <ProjectDetail project={selectedProject} onBack={handleGoBack} />
        ) : (
          <>
            <Hero />
            <RecentProjects onProjectSelect={handleSelectProject} /> // RecentProjects component with project selection handler
            <Technologies />
            <Team />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
        