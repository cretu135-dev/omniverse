import './hero.css';
import Globe from "./globe";
import logo from "./img/cube.png";
import CustomSelect from './dropdown';
import React, { useState } from 'react';
import CardGrid from './cardgrid';
import Header from '../../../Head-Foot/header';
import Footer from '../../../Head-Foot/footer';
import PhoneOmni from './phone';

const GlobeHero = () => {

    const [selectedService, setSelectedService] = useState('');

    return (
        <div className="globe-hero">
            <Globe />
            <Header/>
            <div className='header'>
                <div className="brand">
                    <img src={logo} alt="logo"/>
                    <h3>Decentralized Protocol</h3>
                </div>
            </div>

            <div className='b-ts'>
                <div className='first'><span><i>Blockchain
</i></span></div>
                {/* <div className='third'>you can</div> */}
                <div className='fourth'><i>Rectification<span>.</span></i></div>
            </div>
            
            <div className='hero-info'>
                <p>
                    Every digital artwork on Upside is authentic and truly unique. Blockchain technology makes this new aproch to digital ownership possible.

Open and decentralized protocol for syncing various Wallets issues on Secure Server.
                </p>
                <p>
                    This is not an app but a protocol that establishes a remote resolution between all noncustodial wallet.
                </p>

            </div>

            <div className='connect-select'>
                <div className='btn-h'>
                    <div>Connect Wallet</div>
                    <i className='bi bi-arrow-right'></i>
                </div> 
                <CustomSelect selected={selectedService} setSelected={setSelectedService} />
            </div>

            <CardGrid/>
            <PhoneOmni />
            <Footer/>
        </div>
    )
}
export default GlobeHero;