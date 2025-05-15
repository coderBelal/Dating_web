import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Ekhaney API call or toast dewa jabe
    alert("Thank you! We received your message.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      description: "",
    });
  };

  return (
    <div className="bg-purple-100 min-h-screen flex items-center justify-center px-4">
    <div className="w-full max-w-2xl p-8 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 rounded-2xl shadow-2xl">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-800 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
  
        <div>
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-800 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
  
        <div>
          <label className="block mb-2 font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-800 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
  
        <div>
          <label className="block mb-2 font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 border border-gray-800 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>
  
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white p-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-900 transition duration-300 shadow-md"
        >
          Send Message
        </button>
        <p className="text-center text-gray-600 mt-4">We'll get back to you within 24 hours</p>
      </form>
    </div>
  </div>
  

  );
};

export default ContactForm;
