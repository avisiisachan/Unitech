import React from 'react';
import './DiscoverNow.styles.css';


const DiscoverNow = () => {
  return (
    <div className='discoverNow'>
      <div className='image-container'>
        <img src="DiscoverImage/discover.jpg" alt="Discover" />
      </div>
      <div className='text-container-discover'>
  <div className="text-column">
    <h2>Initiating your business evolution with unitech</h2>
    <div>It's the catalyst for the evolution of your business. Seamlessly integrate groundbreaking solutions that lay the foundation for your upward trajectory.</div>
    <ul>
      <li>Smart Solutions for Intelligent Growth</li>
      <li>Innovate for Industry Leadership</li>
      <li>Intuitive Design, Effortless Progress</li>
      <li>Scalability at Your Fingertips</li>
    </ul>
  </div>
  <div className="button-column">
    <button className='discover-btn'>Discover Now</button>
  </div>
</div>

    </div>
  );
}

export default DiscoverNow;
