import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between md:space-x-12 lg:space-x-20">
        {/* University Information */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <div className="text-3xl font-bold text-mainColor mb-4">
            <i className="bx bxs-graduation mr-2"></i> Eduford
          </div>
          <p className="text-gray-400">
            Eduford is one of the world s leading universities in technology and sciences, dedicated to providing quality education and fostering innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-xl font-semibold text-mainColor mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-mainColor">Home</a></li>
            <li><a href="#about" className="hover:text-mainColor">About Us</a></li>
            <li><a href="#course" className="hover:text-mainColor">Courses</a></li>
            <li><a href="#blog" className="hover:text-mainColor">Blog</a></li>
            <li><a href="#contact" className="hover:text-mainColor">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info and Social Media */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold text-mainColor mb-4">Contact Us</h2>
          <p className="text-gray-400">123 University Ave, Education City, Pakistan</p>
          <p className="text-gray-400 mt-1">Email: info@eduford.edu.pk</p>
          <p className="text-gray-400 mt-1">Phone: +92 123 456789</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mainColor">
              <i className="bx bxl-facebook-circle text-2xl"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mainColor">
              <i className="bx bxl-github text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mainColor">
              <i className="bx bxl-instagram text-2xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mainColor">
              <i className="bx bxl-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Eduford University. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
