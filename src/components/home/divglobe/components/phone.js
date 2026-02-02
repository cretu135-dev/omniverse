import { FaArrowAltCircleRight, FaCheckCircle, FaToolbox, FaWallet } from "react-icons/fa";
import "./phone.css";
import Phone from "./img/phone.png";

const PhoneOmni = () => {
    return(
        <div className="phone-text">
            <div className="phone">
                <img src={Phone} alt="phone" />
            </div>

            <div className="p-text">
                <div className="text-1">
                    <div>
                        <FaWallet size={30} />
                        <span> WebWallet</span>
                    </div>
                    <div></div>
                    <div> FOR APPS</div>
                </div>

                <div className="text-2">The toolkit powering engaging wallet UX</div>

                <div className="text-3">
                    Web3Wallet helps your wallet interoperate with thousands of apps, enabling your users to explore web3 freely and securely.
                </div>

                <div className="text-4">
                    <div>
                        <FaCheckCircle />
                        <p>Connect instantly to 5,000+ web3 and web2 apps</p>
                    </div>
                    <div>
                        <FaCheckCircle />
                        <p>Support multiple chains with no additional code</p>
                    </div>
                    <div>
                        <FaCheckCircle />
                        <p>
                            Secure and inform users with Verify and Notify APIs
                        </p>
                    </div>
                </div>

                <div className="text-btn">
                    <button>
                        Start Building <FaToolbox />
                    </button>

                    <button>
                       Learn more <FaArrowAltCircleRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default PhoneOmni;