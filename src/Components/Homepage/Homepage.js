import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Homepage.css';
import { FaHome, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';  // Importing icons

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  // Function to toggle the modal visibility for sign-up
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to toggle the login form after sign-up
  const toggleLoginForm = () => {
    setIsModalOpen(false); // Close sign-up modal
    setIsLoginFormOpen(true); // Open login form
  };

  // Function to handle Apply Now click
  const handleApplyClick = () => {
    alert('Sign up now to apply for scholarships!');
    toggleModal();  // Open the sign-up modal when trying to apply
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
    <Link to="/contactUs" aria-label="Contact">
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
        <h1>Welcome to the Scholarship Management System</h1>
        <p>Empowering students to secure scholarships with ease</p>
      </header>

      {/* Scholarships Section */}
      <div className="scholarship-section">
        <h2>Available Scholarships</h2>

        {/* Institutional Scholarships */}
        <div className="scholarship-category">
          <h3>Institutional Scholarships</h3>
          <div className="scholarship-cards-container">
            <div className="scholarship-card">
              <h4>ASOLC Scholarship</h4>
              <p>Scholarship for students from the Association of Schools of the Augustinian Sisters.</p>
              <button className="btn" onClick={handleApplyClick}>Apply Now</button> {/* Using the new function */}
            </div>
            <div className="scholarship-card">
              <h4>Siblings Privilege for Integrated School</h4>
              <p>Discount for siblings enrolled in the integrated school.</p>
              <button className="btn" onClick={handleApplyClick}>Apply Now</button>
            </div>
            <div className="scholarship-card">
              <h4>Academic Achievement</h4>
              <p>Scholarship for students with outstanding academic performance.</p>
              <button className="btn" onClick={handleApplyClick}>Apply Now</button>
            </div>
            <div className="scholarship-card">
              <h4>Loyalty Discount</h4>
              <p>Discount for students with loyalty to La Consolacion College.</p>
              <button className="btn" onClick={handleApplyClick}>Apply Now</button>
            </div>
            <div className="scholarship-card">
              <h4>Student Assistant Scholarship</h4>
              <p>Scholarship for students working as student assistants.</p>
              <button className="btn" onClick={handleApplyClick}>Apply Now</button>
            </div>
            <div className="scholarship-card">
              <h4>Sr. Cecilia Maceren, OSA Scholarship (LCCB Chorale)</h4>
              <p>Scholarship for members of the LCCB Chorale.</p>
              <button className="btn" onClick={handleApplyClick}>Apply Now</button>
            </div>
            <div className="scholarship-card">
              <h4>Blue Panthers / Basketball Varsity Scholarship</h4>
              <p>Scholarship for athletes in the Blue Panthers / Basketball Varsity team.</p>
              <button className="btn" onClick={handleApplyClick}>Apply Now</button>
            </div>
            <div className="scholarship-card">
              <h4>Scholarship for BS Interior Design Students</h4>
              <p>Scholarship for students enrolled in the BS Interior Design program.</p>
              <button className="btn" onClick={handleApplyClick}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Government Scholarships */}
        <div className="scholarship-category">
          <h3>Government Scholarships</h3>
          <div className="scholarship-cards-container">
            <div className="scholarship-card">
              <h4>Tulong-Dunong Scholarship (Congressional Scholar)</h4>
              <p>Financial assistance provided by the government for eligible students.</p>
              <button className="btn" onClick={handleApplyClick}>Apply Now</button>
            </div>
            <div className="scholarship-card">
              <h4>Tertiary Education Subsidy</h4>
              <p>Subsidy provided by the government for tertiary education.</p>
              <button className="btn" onClick={handleApplyClick}>Apply Now</button>
            </div>
            <div className="scholarship-card">
              <h4>CHED Scholarship Program (CHED Regular Scholar)</h4>
              <p>Scholarship provided by the Commission on Higher Education (CHED) for eligible students.</p>
              <button className="btn" onClick={handleApplyClick}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Sign Up Now</h3>
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button className="btn" type="submit" onClick={toggleLoginForm}>Sign Up</button>
            </form>
            <button className="btn close-btn" onClick={toggleModal}>Close</button>
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

export default HomePage;
