import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import { FaHome, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';  // Importing icons

const ContactUsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    toggleModal();  // Open the modal on form submission
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img 
            src="/images/Lccblogo.png" 
            alt="Scholarship Management System Logo" 
            className="navbar-logo" 
            style={{ width: '90px', height: '90px' }} 
          />
          <span className="navbar-text">La Consolacion College Bacolod</span>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/home" aria-label="Home">
              <FaHome size={20} /> Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" aria-label="About Us">
              <FaInfoCircle size={20} /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contactus" aria-label="Contact">
              <FaPhoneAlt size={20} /> Contact Us
            </Link>
          </li>
          <li>
    <button className="btn" onClick={toggleModal}>Sign Up</button>
  </li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="home-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Reach out to us for any questions or assistance.</p>
      </header>

      {/* Contact Form Section */}
      <div className="contact-section">
        <h2>Get in Touch</h2>
        <p>Fill out the form below, and we'll get back to you as soon as possible!</p>

        <form onSubmit={handleFormSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>

      {/* Modal for Form Submission Confirmation */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{isFormSubmitted ? 'Thank You!' : 'Error'}</h3>
            <p>{isFormSubmitted ? 'Your message has been successfully sent.' : 'Oops, there was an error.'}</p>
            <button className="btn" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2024 Scholarship Management System | La Consolacion College Bacolod</p>
      </footer>
    </div>
  );
};

export default ContactUsPage;
