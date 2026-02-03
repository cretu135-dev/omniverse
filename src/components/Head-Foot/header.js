import React, { useEffect, useState } from "react";
import "./header.css";
import { FaChartLine } from "react-icons/fa";

function Header() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // Estimated/mock prices with icons
    const estimatedData = [
      { id: "bitcoin", name: "Bitcoin", current_price: 42000, icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
      { id: "ethereum", name: "Ethereum", current_price: 2800, icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
      { id: "solana", name: "Solana", current_price: 95, icon: "https://cryptologos.cc/logos/solana-sol-logo.png" },
      { id: "cardano", name: "Cardano", current_price: 0.45, icon: "https://cryptologos.cc/logos/cardano-ada-logo.png" },
      { id: "polkadot", name: "Polkadot", current_price: 6.2, icon: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png" },
      { id: "dogecoin", name: "Dogecoin", current_price: 0.08, icon: "https://cryptologos.cc/logos/dogecoin-doge-logo.png" },
      { id: "ripple", name: "XRP", current_price: 0.65, icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png" },
      { id: "litecoin", name: "Litecoin", current_price: 150, icon: "https://cryptologos.cc/logos/litecoin-ltc-logo.png" },
      { id: "bitcoin", name: "Bitcoin", current_price: 42000, icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
      { id: "ethereum", name: "Ethereum", current_price: 2800, icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
      { id: "solana", name: "Solana", current_price: 95, icon: "https://cryptologos.cc/logos/solana-sol-logo.png" },
      { id: "cardano", name: "Cardano", current_price: 0.45, icon: "https://cryptologos.cc/logos/cardano-ada-logo.png" },
      { id: "polkadot", name: "Polkadot", current_price: 6.2, icon: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png" },
      { id: "dogecoin", name: "Dogecoin", current_price: 0.08, icon: "https://cryptologos.cc/logos/dogecoin-doge-logo.png" },
      { id: "ripple", name: "XRP", current_price: 0.65, icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png" },
      { id: "litecoin", name: "Litecoin", current_price: 150, icon: "https://cryptologos.cc/logos/litecoin-ltc-logo.png" },
    ];

    setCoins(estimatedData);
  }, []);

  return (
    <div className="header-coins">
      <div className="ticker-wrap">
        <div className="ticker-move">
          {coins.map((coin) => (
            <div key={coin.id} className="ticker-item">
              <img src={coin.icon} alt={coin.name} className="coin-icon" />
              <span style={{color: "#eee"}} className="coin-name">{coin.name}</span>
              <span className="coin-price">${coin.current_price}</span>
              <FaChartLine className="chart-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
