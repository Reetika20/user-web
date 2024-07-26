import React from 'react';
import './Tokenmonic.css';
import Bitcointoken from '../../assets/bitcointoken.png';
import coin from '../../assets/coin.png';
import cetoexIcon from '../../assets/cetoex.png';
import vindaxIcon from '../../assets/vindax.png';
import detradeIcon from '../../assets/detrade.png';
import bitstorageIcon from '../../assets/bitstorage.png';
import bitcointalkIcon from '../../assets/bitcointalk.png';
import binanceIcon from '../../assets/binance.png';
import coinmarketcapIcon from '../../assets/coinmarketcap.png';
import auditIcon from '../../assets/solidproof.png';

const Tokenmonic = () => {
  return (
    <div className='token'>
      <h2>TokenmonicS</h2>
      <div className='tokenmonic'>
        <div className='col col-1'>
          <img className='bitcointoken' src={Bitcointoken} alt='Bitcoin Token' />
        </div>
        <div className='col col-2'>
          <h2>mybuilt-app</h2>    
        </div>
        <div className='col col-3'>
          <img className='coin' src={coin} alt='Coin' />
        </div>
      </div>
      <div className='Boxes'>
        <div className='box col col-1'>Symbol $</div>
        <div className='box col col-2'>Tax 0/0</div>
        <div className='box col col-3'>Liquidity burned and renounce</div>
      </div>
      <div className='Links'>
        <div className='link-row'>
          <div className='link'>
            <a href='https://cetoex.com' target='_blank' rel='noopener noreferrer'>
              <img src={cetoexIcon} alt='CetoEX' />
            </a>
          </div>
          <div className='link'>
            <a href='https://vindax.com' target='_blank' rel='noopener noreferrer'>
              <img src={vindaxIcon} alt='VINDAX' />
            </a>
          </div>
          <div className='link'>
            <a href='https://detrade.com' target='_blank' rel='noopener noreferrer'>
              <img src={detradeIcon} alt='DE-TRADE' />
            </a>
          </div>
          <div className='link'>
            <a href='https://bitstorage.com' target='_blank' rel='noopener noreferrer'>
              <img src={bitstorageIcon} alt='Bitstorage' />
            </a>
          </div>
        </div>
        <div className='link-row'>
          <div className='link'>
            <a href='https://bitcointalk.org' target='_blank' rel='noopener noreferrer'>
              <img src={bitcointalkIcon} alt='BitcoinTalk.org' />
            </a>
          </div>
          <div className='link'>
            <a href='https://binance.com' target='_blank' rel='noopener noreferrer'>
              <img src={binanceIcon} alt='Binance Article' />
            </a>
          </div>
          <div className='link'>
            <a href='https://coinmarketcap.com' target='_blank' rel='noopener noreferrer'>
              <img src={coinmarketcapIcon} alt='CoinMarketCap' />
            </a>
          </div>
        </div>
      </div>
      <div className='button-container'>
        <button className='animated-button'>
          Audited by Solid Proof
          <img src={auditIcon} alt='Audit Icon' className='button-icon' />
        </button>
      </div>
      <footer className='footer'>
        <p>© 2024 All Rights Reserved by MOLLY</p>
        <p>For Business: <a href="mailto:support@coin.xyz">support@coin.xyz</a></p>
      </footer>
    </div>
  );
};

export default Tokenmonic;
