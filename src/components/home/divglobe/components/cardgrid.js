import { Link } from "react-router-dom";
import "./cardgrid.css";

import {
  FaExclamationTriangle, // issues/errors
  FaSync,               // validate/synchronize
  FaRecycle,            // recovery
  FaTools,              // rectification
  FaHandHoldingUsd,     // stake
  FaArrowAltCircleDown, // unstake
  FaGasPump,            // gas fees
  FaSlidersH,           // slippage
  FaTimesCircle,        // transaction error
  FaExchangeAlt,        // cross chain transfer
  FaShoppingCart,       // buy
  FaRandom,             // swap/exchange
  FaGift,               // claim reflection
  FaClipboardCheck,     // claim
  FaPlug,               // connect to dapps
  FaSignInAlt,          // login issues
  FaParachuteBox,       // claim airdrop
  FaImage,              // NFTs issues
  FaBalanceScale,       // missing/irregular balance
  FaListAlt,            // whitelist issues
  FaHourglassHalf,      // transaction delay
  FaLock,               // locked account
  FaWallet,             // trading wallet issues
  FaQuestionCircle      // other issues
} from "react-icons/fa";

const cards = [
  { icon: FaExclamationTriangle, text: "Migration Issues" },
  { icon: FaSync, text: "Validate or Syncronize" },
  { icon: FaRecycle, text: "Assets Recovery" },
  { icon: FaTools, text: "Rectification Issues" },
  { icon: FaHandHoldingUsd, text: "Stake" },
  { icon: FaArrowAltCircleDown, text: "Unstake" },
  { icon: FaGasPump, text: "High Gas Fees" },
  { icon: FaSlidersH, text: "Slippage Error" },
  { icon: FaTimesCircle, text: "Transaction Error" },
  { icon: FaExchangeAlt, text: "Cross Chain Transfer" },
  { icon: FaShoppingCart, text: "Buy" },
  { icon: FaRandom, text: "Swap/Exchange" },
  { icon: FaGift, text: "Claim Reflection" },
  { icon: FaClipboardCheck, text: "Claim" },
  { icon: FaPlug, text: "Connect to Dapps" },
  { icon: FaSignInAlt, text: "Login Issues" },
  { icon: FaParachuteBox, text: "Claim Airdrop" },
  { icon: FaImage, text: "NFTs Issues" },
  { icon: FaBalanceScale, text: "Missing/Irregular Balance" },
  { icon: FaListAlt, text: "Whitelit Issues" },
  { icon: FaHourglassHalf, text: "Transaction delay" },
  { icon: FaLock, text: "Locked Account" },
  { icon: FaWallet, text: "Trading Wallet Issues" },
  { icon: FaQuestionCircle, text: "Other Issues not listed" },
];


const CardGrid = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "transparent",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {cards.map((card, index) => (
        <Link
          key={index}
          to="/connect"
          className="my-box"
        >
          <card.icon size={40} className="home-i"/>
          
          <p style={{ marginTop: "10px", fontWeight: "bold", fontSize: "20px"}}>{card.text}</p>
        </Link>
      ))}
    </div>
  );
};

export default CardGrid;

