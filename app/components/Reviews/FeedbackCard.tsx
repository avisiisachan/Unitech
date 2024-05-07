// FeedbackCard.js

import React from 'react';
import './FeedbackCard.styles.css'; // Import CSS file

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="feedback-card-container">
    <div className="feedback-card">
    <div className="flex flex-row">
        <img src={img} alt={name} className="rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
      <p className="font-poppins font-normal text-[18px] leading-[32.4px]">
        {content}
      </p>

      
    </div>
  </div>
);

export default FeedbackCard;
