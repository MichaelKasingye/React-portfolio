import React from 'react'
import Typewriter from 'typewriter-effect';
import './hero.css'
function Hero() {
    return (
        <div className="hero">
            <div className="welcome-section-introduction">
            <div className="intro">
<div className="name">
    <h1>Hello, I am<br/> 
    MIchael Kasingye</h1>
</div>
<div className="typewriter">
    <Typewriter
  options={{
    strings: ['Software Developer', 'Team Leader', 'Mentor'],
    autoStart: true,
    loop: true,
  }}
/>   

</div>
            </div>
        </div></div>
    )
}

export default Hero
