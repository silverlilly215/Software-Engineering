import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';  // Ensure correct path here
import AboutUs from './Components/AboutUs/AboutUs';  // Ensure correct path here
import ContactUs from './Components/ContactUs/ContactUs';  // Assuming you want to use this page as well

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Homepage route */}
          <Route path="/home" element={<Homepage />} />
          
          {/* About Us route */}
          <Route path="/aboutus" element={<AboutUs />} />
          
          {/* Contact Us route */}
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
