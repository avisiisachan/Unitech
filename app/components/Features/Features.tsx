import React from 'react'
import './Features.styles.css';
const Features = () => {
  return (
    <div className='features-main'>
      <h1>Powerful Features</h1>
    <div className='features'>

      <div className='featurs1-container'>
        <div className='feat1-row'>
            <h2>Analyze your Data</h2>
            Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.
        </div>
        <div className='feat2-row'>
            <h2>Collaborate Securely</h2>
            Our platform provides a secure environment for seamless teamwork, ensuring information at every step.
        </div>
        <div className='feat3-row'>
            <h2>Insight Reach</h2>
            Harness the power of data-driven insights to reach your target audience effectively, with advanced analytics.
        </div>
      </div>
      <div className='featuresImg-container'>
        <img src="FeaturesImage/featuresImg.svg" alt="" />
      </div>
      <div className='features2-container'>
        <div className='feat4-row'>
            <h2>Easy and Intuitive</h2>
            Navigating through our platform is a breeze, thanks to its user-friendly design and straightforward features.
        </div>
        <div className='feat5-row'>
            <h2>Power of Flow</h2>
            Our streamlined platform empowers you to automate tasks, and achieve more with less effort.
        </div>
        <div className='feat6-row'>
            <h2>Smart Sync</h2>
            With Smart Sync, experience effortless collaboration and productivity, no matter where you are.
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features
