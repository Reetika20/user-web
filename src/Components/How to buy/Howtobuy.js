import React from 'react'
import './Howtobuy.css'
import Head from '../../assets/Head.png'

const Howtobuy = () => {
  return (
    <div className='howtobuy'>
        <h2>How to buy</h2>
        
        <div className='htb'>
            <p>Here step 1<br/>
            <img src={Head} alt=''/></p>
            <p>Here step 2<br/>
            <img src={Head} alt=''/></p>
            <p>Here step 3<br/>
            <img src={Head} alt=''/></p>
            <p>Here step 4<br/>
            <img src={Head} alt=''/></p>
        </div>

        <h2>--- Steps for buying --- </h2>
        <button className='btn dark-btn'>Click here to proceed</button>
        
        </div>
        
        
  )
}

export default Howtobuy