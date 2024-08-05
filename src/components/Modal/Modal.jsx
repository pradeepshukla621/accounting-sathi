import React from 'react';
import './Modal.css'; // Make sure to create appropriate styles
import LoginForm from '../LoginForm/LoginForm';

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <LoginForm  />
      </div>
    </div>
  );
};

export default Modal;
