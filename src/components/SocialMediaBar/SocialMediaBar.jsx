import React from 'react';
import './SocialMediaBar.css';
import Facebook from "../../assets/images/facebook.svg"
import Instagram from "../../assets/images/instagram.svg"
import Youtube from "../../assets/images/youtube.svg"


const SocialMediaBar = () => {
  return (
    <div className="social-bar">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook"><img className="pt-1" src={Facebook} alt="" /><span>Facebook</span></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram"><img className="pt-1" src={Instagram} alt="" /><span>Instagram</span></a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube"><img className="pt-1" src={Youtube} alt="" /><span>Youtube</span></a>
    </div>
  );
};

export default SocialMediaBar;