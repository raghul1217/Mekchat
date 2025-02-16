import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../styles/neoncard.css';

const NeonCard = ({ description, heading }) => {


  // useEffect(() => {
  //   ScrollReveal().reveal('.card-border', {
  //     origin: 'bottom',
  //     distance: '50px',
  //     duration: 1000,
  //     easing: 'ease-in-out',
  //     opacity: 0,
  //     reset: true, 
  //   });
  // }, []);


  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",           // Animation starts from the right
      distance: "32px",          // Moves 40px during the animation
      duration: 1000,            // The animation lasts for 1000ms
      delay: 300,                // Delay before the animation starts
      easing: "cubic-bezier(0.5, 0, 0, 1)", // Smooth cubic-bezier effect
      reset: true,               // Animation repeats on scroll
      beforeReveal: (el) => {
        el.style.transform = "none"; // Removes any existing transform styles
      },
    });
  
    sr.reveal(".card-border", { interval: 250 });
  
    return () => sr.destroy();  // Clean up on component unmount
  }, []);
  




  return (
    <div className="card-border">
      <div className="card-bg">
        <div className="container-logo">
          <div className="logo"></div>
          <div className="logo-inside">
            <div className="first"></div>
            <div className="second"></div>
          </div>
        </div>
        <div className="content">
          <h4>{description}</h4>
        </div>
        <div id="blur-area"></div>
        <div className="marquee">
          <div className="marquee__inner" aria-hidden="true">
            <span className="viper">mekchat mekchat mekchat mekchat</span>
            <span className="viper">mekchat mekchat mekchat mekchat</span>
            <span className="viper">mekchat mekchat mekchat mekchat</span>
          </div>
        </div>
      </div>
      <strong id="text-border">{heading}</strong>
    </div>
  );
};

export default NeonCard;
