import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; // Ensure your Homepage.css is used for styling
import { FaHome, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';  // Importing icons

const AboutUsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle the modal visibility for sign-up
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
          />
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
        <h1>About Us</h1>
        <p>Learn more about the Scholarship Management System</p>
      </header>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              The Scholarship Management System was created with the mission to streamline the scholarship application process, making it easier for students to apply for scholarships, track their progress, and access all available opportunities in one place. 
            </p>
            <p>
              Our goal is to empower students by providing a digital platform that supports them throughout their educational journey. By reducing administrative tasks and ensuring that all information is available and accessible, we aim to help students secure the scholarships they deserve and ease the burden of application management for educational institutions.
            </p>
          </div>

          <div className="about-image">
            <img src="/images/Lccbbackgroundimage.png" alt="About Us Image" />
          </div>
        </div>

        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            We envision a future where every student has equal access to scholarship opportunities, with a seamless application process that saves time, increases fairness, and ensures transparency. Our platform will continually evolve to meet the changing needs of students and educational institutions, promoting academic success and creating lasting educational opportunities.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Values</h2>
          <ul>
            <li>Accessibility: Ensuring that students have easy access to scholarship opportunities.</li>
            <li>Transparency: Making the application and evaluation process clear and understandable.</li>
            <li>Efficiency: Streamlining the process for both students and administrators.</li>
            <li>Fairness: Providing an unbiased platform for all applicants.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2024 Scholarship Management System | La Consolacion College Bacolod</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;
