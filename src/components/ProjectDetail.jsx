import React from 'react';
import { Projects } from '../constants.js';


const ProjectDetail = ({ project, onBack }) => { // Ensure project is provided
  // Comment data for demonstration purposes
  const comments = [
    { id: 1, author: 'Marcelo Sánchez', text: 'Este proyecto es muy interesante y bien estructurado.' },
    { id: 2, author: 'Pablito', text: 'Aja si ta bonito y todo pero.. ¿Cuándo foking pagan?' },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <button 
        type="button" 
        onClick={onBack} 
        className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
      > 
        &larr;
      Back to Projects
      </button>

      <article className="max-w-4xl mx-auto">
        <header>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{project.title}</h1>
          <p className="text-lg text-gray-400 mb-6">By <span className="text-primary">{project.author}</span></p>
          <img src={project.articleImageUrl} alt={project.title} className="w-full rounded-lg shadow-lg mb-8" />
        </header>

        <div
          className="prose-styles text-justify text-gray-300 mb-12"
          dangerouslySetInnerHTML={{ __html: project.detailedDescription }}
        >
        </div>
        <style>{`
          .prose-styles p {
            margin-bottom: 1em;
            margin-top: 1em;
            line-height: 1.75;
            color: #D1D5DB;
          }
           .prose-styles h2 {
            color: #FFD000;
            font-weight: 700;
           }
           .prose-styles a {
            color: #FFD000;
           }
            .prose-styles a:hover {
            color: #FFB700;
           }
        `}</style>

        <div className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-dark-3 text-gray-200 text-sm font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                ))}
            </div>
        </div>

        <hr className="border-dark-3 my-12" />

        <section id="comments" aria-labelledby="comments-heading">
            <h2 id="comments-heading" className="text-2xl font-bold text-primary mb-8">Comments</h2>

            {/* Comment Form */}
            <form className="mb-12">
                <div className="mb-4">
                    <label htmlFor="comment-author" className="block text-gray-300 mb-2 font-semibold">Name</label>
                    <input type="text" id="comment-author" name="author" className="w-full bg-dark-2 border border-dark-3 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="comment-body" className="block text-gray-300 mb-2 font-semibold">Your Comment</label>
                    <textarea id="comment-body" name="comment" rows={4} className="w-full bg-dark-2 border border-dark-3 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Write your thoughts..."></textarea>
                </div>
                <button type="submit" className="bg-primary text-dark-1 font-bold py-2 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300">
                    Post Comment
                </button>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
                {comments.map(comment => ( // Display each comment
                    <div key={comment.id} className="bg-dark-2 p-4 rounded-lg">
                        <p className="font-bold text-white">{comment.author}</p>
                        <p className="text-gray-400 mt-1">{comment.text}</p>
                    </div>
                ))}
            </div>
        </section>
      </article>
    </div>
  );
};

export default ProjectDetail;