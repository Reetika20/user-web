import React from 'react';
import './Head.css';
import telegramIcon from '../../assets/telegram.png';
import twitterIcon from '../../assets/twitter.png';
import uniswapIcon from '../../assets/uniswap.png';
import dextoolsIcon from '../../assets/dextools.png';
import etherscanIcon from '../../assets/etherscan.png';
import coinmarketcapIcon from '../../assets/coinmarketcap.png';

const Head = () => {
  return (
    <div className='head container'>
      <div className='head-text'>
        <h2>Welcome to mybit</h2>
        <p>bitcoin is the new change</p>
        <div className='links'>
          <a href='https://t.me/yourchannel' target='_blank' rel='noopener noreferrer'>
            <img src={telegramIcon} alt='Telegram' className='icon' />
          </a>
          <a href='https://twitter.com/yourprofile' target='_blank' rel='noopener noreferrer'>
            <img src={twitterIcon} alt='Twitter' className='icon' />
          </a>
          <a href='https://uniswap.org' target='_blank' rel='noopener noreferrer'>
            <img src={uniswapIcon} alt='Uniswap' className='icon' />
          </a>
          <a href='https://dextools.io' target='_blank' rel='noopener noreferrer'>
            <img src={dextoolsIcon} alt='Dextools' className='icon' />
          </a>
          <a href='https://etherscan.io' target='_blank' rel='noopener noreferrer'>
            <img src={etherscanIcon} alt='Etherscan' className='icon' />
          </a>
          <a href='https://coinmarketcap.com' target='_blank' rel='noopener noreferrer'>
            <img src={coinmarketcapIcon} alt='CoinMarketCap' className='icon' />
          </a>
        </div>
        <p>Contract: ekihcfrygwnkercgfyekxfg</p>
        <p>
          <button className='btn'>Buy On Uniswap</button> 
          <button className='btn'>Community</button>
        </p>
      </div>
    </div>
  );
};

export default Head;
