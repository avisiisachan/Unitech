import React from 'react';
import './Integrations.styles.css';

const Integrations = () => {
  return (
    <div className='integrations'>
        <div className='integrations-background'>
        <div className="integration-text-row">
    <h1 className="integration-heading">Integrating Your Workflow with Unitechs</h1>
    <div className="integration-text">In the dynamic landscape of business operations, the key to unlocking optimal efficiency lies in the seamless integration of your workflow.</div>
    <div className="integration-btn-container">
        <div className="arrow-circle">
            <span>&#8594;</span>
        </div>
        <button className="integration-bttn">Explore Integrations</button>
    </div>
</div>
      <div className='integrations-images-row'>
        <div className='integrations-images-container'>
          <div className='inte-img-container'>
            <img src="IntegrationsImages/integration1.svg" alt="" />
          </div>
          <div className='inte-img-container'>
            <img src="IntegrationsImages/integration2.svg" alt="" />
          </div>
          <div className='inte-img-container'>
            <img src="IntegrationsImages/integration3.svg" alt="" />
          </div>
          <div className='inte-img-container'>
            <img src="IntegrationsImages/integration4.svg" alt="" />
          </div>
          <div className='inte-img-container'>
            <img src="IntegrationsImages/integration5.svg" alt="" />
          </div>
          <div className='inte-img-container'>
            <img src="IntegrationsImages/integration6.svg" alt="" />
          </div>
          <div className='inte-img-container'>
            <img src="IntegrationsImages/integration7.svg" alt="" />
          </div>
          <div className='inte-img-container'>
            <img src="IntegrationsImages/integration8.svg" alt="" />
          </div>
          <div className='inte-img-container'>
            <img src="IntegrationsImages/integration9.svg" alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Integrations;
