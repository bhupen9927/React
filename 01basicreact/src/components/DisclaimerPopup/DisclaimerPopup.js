import React from "react";
import "./DisclaimerPopup.css";

const DisclaimerPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="eg-disclaimer-popup">
      <div className="eg-disclaimer-overlay" onClick={onClose}></div>
      <div className="eg-disclaimer-content">
        <img className="eg-disclaimer-close" src="https://i.ibb.co/6cgGcmhp/Frame-10.png" alt="Frame-10" onClick={onClose}></img>
        <div className="eg-disclaimer-image">
        <img src="https://i.ibb.co/JFBv2Zzz/efxicon-Confirmation.png" alt="efxicon-Confirmation"></img>
        </div>
        <div className="eg-disclaimer-header">
          <h2>Equifax Marketplace</h2>
          <p>
            To proceed, please confirm that you are a UK resident, over 18 years
            old, and have a regular source of income.
          </p>
        </div>
        <div className="eg-disclaimer-buttons">
          <button className="eg-disclaimer-btn eg-go-back">
            No, go back
          </button>
          <button className="eg-disclaimer-btn eg-proceed">I confirm, proceed</button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
