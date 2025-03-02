import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ firstName: '', email: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:gap-16">
        <div className="md:w-1/2 mb-18 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Get in Touch</h1>
          
          <p className="text-gray-600 mb-8">
            We'd love to hear from you! Reach out for inquiries, support, or 
            feedback regarding our high-quality activewear and website 
            experience.
          </p>
          
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Support</h2>
            <a 
              href="mailto:flexlinen2024@gmail.com" 
              className="text-blue-600 hover:underline"
            >
              flexlinen2024@gmail.com
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-gray-700">
                Your First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700">
                Your Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700">
                Your Message<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                required
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-full transition duration-300"
            >
              Submit Your Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;