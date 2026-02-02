import './connect.css';
import React, { useState } from "react"; import { Link } from "react-router-dom";
import SearchGallery from './searchGallery';
import connect_wallet from "./img/wallet-connect.png"

// Home AKA Website
const Connect = () => {
    return (
        <div className='connect'>
            <div className='c-t'> 
                <div className='connect-top'>
                    <img src={connect_wallet} alt='cw'/>
                </div>
                <div>
                    Connect Wallet
                </div>
                <div>
                    Connect Wallet
                </div>
            </div>
            <SearchGallery/>
        </div>
    )
}
export default Connect;