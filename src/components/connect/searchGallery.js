import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./searchGallery.css";
import ambire from './img/ambire.jpg';
import beldex from './img/beldex.jpg';
import bestWallet from './img/best-wallet.png';
import bitgetWallet from './img/bitget-wallet.png';
import bittensor from './img/bittensor.jpg';
import brd from './img/brd.jpg';
import cake from './img/cake.png';
import casperWallet from './img/casper wallet.png';
import coinbase from './img/coinbase.png';
import compass from './img/compass.png';
import delfichain from './img/delfichain.jpg';
import earth from './img/earth.jpeg';
import frostWallet from './img/frost-wallet.jpg';
import hiro from './img/hiro.png';
import iluminaryai from './img/iluminaryai.jpg';
import ipswap from './img/ipswap.png';
import jupiter from './img/jupiter.jpg';
import kaspa from './img/kaspa.png';

import keplr from './img/keplr.png';
import ledger from './img/ledger.png';
import metamask from './img/metamask.png';
import mytonwallet from './img/mytonwallet.jpg';
import near from './img/near.png';
import nem from './img/nem.png';
import okx from './img/okx.png';
import ordinals from './img/ordinals.jpg';
import petra from './img/petra.jpg';
import phantom from './img/phantom.jpg';
import pulse from './img/pulse.jpg';
import saitamask from './img/saitamask.png';
import solflare from './img/solflare.jpg';
import sparrow from './img/sparrow.png';
import starkey from './img/starkey.jpg';
import tonKepper from './img/ton-kepper.jpg';
import trust from './img/trust.jpg';
import trustee from './img/trustee.jpg';
import unisat from './img/unisat.png';
import wallet_connect from "./img/wallet-connect.png";

const SearchGallery = () => {
  const [query, setQuery] = useState("");

  const options = [
  { id: 1, image: wallet_connect, label: "Connect Wallet" },
  { id: 2, image: beldex, label: "Beldex Wallet" },
  { id: 3, image: bestWallet, label: "Best Wallet" },
  { id: 4, image: bitgetWallet, label: "Bitget Wallet" },
  { id: 5, image: bittensor, label: "Bittensor Wallet" },
  { id: 6, image: brd, label: "BRD Wallet" },
  { id: 7, image: cake, label: "Cake Wallet" },
  { id: 8, image: casperWallet, label: "Casper Wallet" },
  { id: 9, image: coinbase, label: "Coinbase Wallet" },
  { id: 10, image: compass, label: "Compass Wallet" },
  { id: 11, image: delfichain, label: "Delfichain Wallet" },
  { id: 12, image: earth, label: "Earth Wallet" },
  { id: 13, image: frostWallet, label: "Frost Wallet" },
  { id: 14, image: hiro, label: "Hiro Wallet" },
  { id: 15, image: iluminaryai, label: "Iluminary AI" },
  { id: 16, image: ipswap, label: "Ipswap Wallet" },
  { id: 17, image: jupiter, label: "Jupiter Wallet" },
  { id: 18, image: kaspa, label: "Kaspa Wallet" },

  { id: 19, image: keplr, label: "Keplr Wallet" },
  { id: 20, image: ledger, label: "Ledger Wallet" },
  { id: 21, image: metamask, label: "Metamask Wallet" },
  { id: 22, image: mytonwallet, label: "MyTon Wallet" },
  { id: 23, image: near, label: "Near Wallet" },
  { id: 24, image: nem, label: "NEM Wallet" },
  { id: 25, image: okx, label: "OKX Wallet" },
  { id: 26, image: ordinals, label: "Ordinals Wallet" },
  { id: 27, image: petra, label: "Petra Wallet" },
  { id: 28, image: phantom, label: "Phantom Wallet" },
  { id: 29, image: pulse, label: "Pulse Wallet" },
  { id: 30, image: saitamask, label: "Saitamask Wallet" },
  { id: 31, image: solflare, label: "Solflare Wallet" },
  { id: 32, image: sparrow, label: "Sparrow Wallet" },
  { id: 33, image: starkey, label: "Starkey Wallet" },
  { id: 34, image: tonKepper, label: "Ton Kepper" },
  { id: 35, image: trust, label: "Trust Wallet" },
  { id: 36, image: trustee, label: "Trustee Wallet" },
  { id: 37, image: unisat, label: "Unisat Wallet" },
];


  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px" }}
        className="search-bar"
      />

      <div className="search-gallery">
        {filteredOptions.map(option => (
          <Link key={option.id} to="/wallet" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ textAlign: "center" }}>
              <img src={option.image} alt={option.label} style={{ height: "auto", borderRadius: "50%" }} />
              <p>{option.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchGallery;