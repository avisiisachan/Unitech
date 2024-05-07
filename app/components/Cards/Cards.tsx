import React from 'react';
import './Cards.styles.css';

const Cards = () => {
  return (
    <div className='cards'>
      <div className='card1'>
        <div className='content'>
          <img src="cardImages/automation.svg" alt="Automation" />
          <h2 className='subhead'>Intelligent Automation</h2>
        </div>
        <div className='card1-text'>
          Harness the power of smart automation to streamline repetitive tasks and boost operational efficiency.
        </div>
        <img className='card1-img' src="cardImages/card-img1.svg" alt="Card 1" />
      </div>
      <div className='card2'>
        <div className='content'>
          <img src="cardImages/architecture.svg" alt="Architecture" />
          <h2 className='subhead'>Scalable Architecture</h2>
        </div>
        <div className='card2-text'>Seamlessly adapt to changing demands, ensuring sustained success as your business evolves.</div>
        <img className='card2-img' src="cardImages/card-img2.png" alt="Card 2" />
      </div>
      <div className='card3'>
        <div className='content'>
          <img src="cardImages/edge.svg" alt="Innovation" />
          <h2 className='subhead'>Cutting-Edge Innovation</h2>
        </div>
        <div className='card3-text'>Access the latest technologies, continuous innovation and features that empower you to lead in a dynamic market.</div>
        <img className='card3-img' src="cardImages/card-img3.svg" alt="Card 3" />
      </div>
    </div>
  )
}

export default Cards;
