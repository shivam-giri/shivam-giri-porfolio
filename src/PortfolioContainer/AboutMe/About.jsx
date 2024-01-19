import React from "react";
import './About.css';
import ME  from '../../assests/Home/award.jpg'
const About = () =>{
  return(
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="bg-award-about about__me">
        <div className="">
            <div className="about__me-image">
              <img src={ME} alt="My Image" />
              <small>I got this award for my performance</small>
            </div>
          </div>
        <div className="container about__container">

          <div className="about__content">
            <p class="about-me-text">
            I am a Front-end Developer with 2 years of commercial experience and post-graduate as Master of Computer Application(MCA) in 2020 from Birla Institute of Technology(BIT). I create successful websites that are fast, easy to use, and built with best practices.
            </p>
            {/* <a href="#contact" class="button-49"> Let's Talk</a> */}
          <div className="cta-wrapper luxury">
                <a href="#contact" className="glow-on-hover">Let's Talk</a>
            </div>
          </div>
          {/* <button class="button-49" role="button">Button 49</button> */}
        </div>
      </div>
    </section>
  )
}

export default About;