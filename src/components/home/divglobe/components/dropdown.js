import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './dropdown.css';

const options = [
  'Bitcoin',       // BTC – the original, largest by market cap
  'Ethereum',      // ETH – dominant smart contract platform
  'Binance',       // BNB Chain (BNB Smart Chain / BSC)
  'Polygon',       // Popular EVM-compatible scaling solution (now often its own chain ecosystem)
  'Solana',        // SOL – high-throughput alternative
  'AVAX',          // Avalanche – fast finality with subnets
  'Tron',          // TRX – high TVL, especially stablecoins
  'Cardano',       // ADA – research-driven PoS chain
  'Sui',           // Emerging high-performance L1
  'TON',           // The Open Network – Telegram-integrated
  'Near',          // NEAR – sharded, developer-friendly
  'Aptos',         // Move-language based L1
  'Hedera',        // HBAR – enterprise-focused (hashgraph)
  'Cosmos',        // ATOM – interoperability hub (and its zones)
  'Polkadot',      // DOT – parachain architecture
  'XRP Ledger',    // Ripple's XRPL (often just called XRP chain)
  'Algorand',      // ALGO – pure PoS, fast finality
  'Stellar',       // XLM – payments-focused
  'Base',          // Coinbase's Ethereum L2 (very high adoption)
  'Arbitrum',      // Leading Ethereum L2 rollup
  'Optimism',      // Another major Ethereum L2
  'Hyperliquid',   // Rising fast L1 for derivatives
  'Cronos',        // Crypto.com chain
  'Fantom',        // FTM – fast EVM-compatible
  'Sei',           // High-speed trading-focused L1
  // Add more niche/regional ones if needed, e.g.:
  // 'Kaspa', 'VeChain', 'Tezos', 'Internet Computer (ICP)', 'Kava', etc.
];

const CustomSelect = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="form-group custom-select" ref={containerRef}>
      <div
        className="select select-box"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selected || 'Select Chain'}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="select-options"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="listbox"
          >
            {options.map((option) => (
              <motion.li
                key={option}
                className="select-option"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                role="option"
                aria-selected={selected === option}
              >
                {option}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Hidden input for form submission */}
      <input type="hidden" name="service_requested" value={selected} required />
    </div>
  );
};

export default CustomSelect;
