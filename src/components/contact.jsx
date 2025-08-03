import React from 'react';
import { useState } from 'react';

const Contact = () => { // Ensure formData has name, email, subject, and message
    const [formData, setFormData] = useState({ // Initialize form data with empty strings
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
    const [responseMessage, setResponseMessage] = useState(''); // Track response message

    const handleChange = (e) => { // Handle input changes
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => { // Handle form submission
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        // Simulate API call for future implementation on live site
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real app, you would send the formData to your backend here.
        console.log('Form data submitted:', formData);

        setIsSubmitting(false);
        setResponseMessage('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
        
        setTimeout(() => setResponseMessage(''), 5000); // Clear message after 5 seconds
    };

    return (
        <section id="contact" className="py-20 bg-dark-2">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Contact <span className="text-primary">Us</span>
                </h2>
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark-3 border-2 border-dark-3 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark-3 border-2 border-dark-3 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark-3 border-2 border-dark-3 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                placeholder="Regarding a project..."
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark-3 border-2 border-dark-3 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                placeholder="Your detailed message here..."
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-primary text-secondary text-lg font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105 duration-300 disabled:bg-dark-3 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                    {responseMessage && (
                        <p className="mt-6 text-center text-green-400 bg-green-900/50 p-3 rounded-md">
                            {responseMessage}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;