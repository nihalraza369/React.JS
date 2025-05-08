import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-md"
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full p-3 border rounded-md"
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;