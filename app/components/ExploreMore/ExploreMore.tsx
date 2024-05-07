import React from 'react';
import './ExploreMore.styles.css';

const ExploreMore = () => {
  return (
    <div className='exploreMore'>
      <div className='text-container'>
        <div className='text-column'>
          <h2>The unity of innovation and execution</h2>
          <div>At Unitech, we believe in the power of unity – where groundbreaking ideas and meticulous execution come together to propel your vision forward.</div>
          <div className='text-row'>
            <ul>
              <li>
                <h3>1. Innovation Redefined</h3>
                <div className='li-text'>Our platform serves as a breeding ground for pioneering solutions, keeping you at the forefront of progress.</div>
              </li>
              <li>
                <h3>2. Precision in Execution</h3>
                <div className='li-text'>Every feature is meticulously crafted to ensure seamless integration and impactful outcomes.</div>
              </li>
            </ul>
          </div>
          <div className='text-row'>
            <button className='exploreMore-btn'>Explore More</button>
          </div>
        </div>
      </div>
      <div className='image-container'>
        <img src="ExploreMoreImage/exploreMore.jpg" alt="Explore More" />
      </div>
    </div>
  );
}

export default ExploreMore;
