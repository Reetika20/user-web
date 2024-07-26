import React from 'react'
import './About.css'
import Head from '../../assets/Head.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
          <img src={Head} alt='' className='about-img'></img>
        </div>
        <div className='about-right'>
          <h3>
            About mybit App
          </h3>
        <h4>
            bxfgexknmefugnfnwepfh
        </h4>
        <p>Molly, one of the characters from Matt Furie's book "The Night Rider", 
            is a mole who meets Hoppy, Ratty, and Flappy, adding a delightful 
            touch of whimsy to their adventures. In the story, before the frog 
            and the rat meet the bat, they encountered the dragon's subterranean 
            friends. Including Molly, a sleepy mole hibernating near bat's 
            basement. Though being a side character, r</p>
        </div>

    </div>
  )
}

export default About