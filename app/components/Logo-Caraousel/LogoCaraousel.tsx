import React, { useState } from 'react';
import Slider from 'react-slick';
import './LogoCaraousel.styles.css';

const LogoCaraousel = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    centerMode: true, // Add centerMode to center the active slide
    centerPadding: '0px', // Set centerPadding to 0 to remove gap between last and first logo
  });

  const logos = [
    'logos/logo1.svg',
    'logos/logo2.svg',
    'logos/logo3.svg',
    'logos/logo4.svg',
    'logos/logo5.svg',
    'logos/logo6.svg',
    'logos/logo7.svg'
  ];

  return (
    <div className='caraousel'>
        <h2 className="center-text text">Trusted by Visionaries, Embraced by Leading Companies Worldwide</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="container">
            <img src={logo} alt='logo' className="w-32 h-auto mx-auto logo-img" /> {/* Increase the size of logos */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCaraousel;
