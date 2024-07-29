import React from 'react';
import './SocialMediaBar.css';

const SocialMediaBar = () => {
  return (
    <div className="social-bar">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">F</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">T</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">I</a>
    </div>
  );
};

export default SocialMediaBar;