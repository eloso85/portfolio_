import React from 'react';
import {  BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/alejandro-segura-764343155/"
      target="_blank"
      rel="noopener noreferrer"
    
    >
      <FaLinkedin />
    </a>
    <a
       href="https://www.facebook.com/webdevducks"
       target="_blank"
       rel="noopener noreferrer"
    
    
    >
      <FaFacebookF />
    </a>
    <a
     href="https://www.instagram.com/webdevducks/"
     target="_blank"
     rel="noopener noreferrer"
    
    >
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;