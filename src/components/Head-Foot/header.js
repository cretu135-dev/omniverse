
import React, { useEffect, useState } from "react";
import "./header.css";

function Header() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // Example: Fetch crypto prices from CoinGecko API
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano,polkadot")
      .then(res => res.json())
      .then(data => setCoins(data));
  }, []);

  return (
    <div className="header-coins">
      <div className="ticker-wrap">
        <div className="ticker-move">
          {coins.map((coin) => (
            <div key={coin.id} className="ticker-item">
              {coin.name} (${coin.current_price})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
