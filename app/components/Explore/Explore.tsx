import React, { useState } from 'react';
import './Explore.styles.css';
const Explore = () => {
  const [email, setEmail] = useState('');

  const putEmail = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div className='main'>
      <div className='top-half'>
        <div className='heading'> Explore the Unitech experience</div>
        <div className='invite'>We invite you to explore a realm where innovation is second nature, 
          and intuitive solutions pave the way for transformative success.</div>

        <div className='request-demo-form'>
          <form>
            <input className='email' type="email" onChange={putEmail} placeholder='Email Address' />
            <i className="fas fa-envelope email-icon"></i>
            <button className='request-demo' type='submit'>Request Demo</button>
          </form>
        </div>
        <div className='message'>Personalized solutions for your specific requirements.</div>
      </div>
  
      <div className="container">
  <div className="grid grid-cols-4">
    <div className="col-span-1 flex justify-center">
      <img src="/Images/side-card1.jpg" className="small-image1" />
    </div>
    <div className="col-span-2 flex justify-center">
      <img src="/Images/img-big-comp.jpg" className="big-image" />
    </div>
    <div className="col-span-1 flex justify-center">
      <div className="flex flex-col"> {/* Use flex-column to stack images vertically */}
        <img src="/Images/side-card2.jpg" className="small-image2" />
        <img src="/Images/side-card3.svg" className="small-image3" />
      </div>
    </div>
  </div>
</div>



  </div>
  );
};

export default Explore;
