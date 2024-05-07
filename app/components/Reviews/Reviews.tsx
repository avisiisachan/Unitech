import React from 'react';
import FeedbackCard from './FeedbackCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import carousel styles

import './Reviews.styles.css';

const feedback = [
  {
    id: "feedback-1",
    content:
      "Innovation is at the core of unitech, and it reflects in the features it offers. From intelligent automation to cutting-edge tools, unitech provides a playground for forward-thinking businesses. The innovative features not only meet our current needs but also position us for future.",
    name: "Courtney Henry",
    title: "Tech Solutions",
    img: "ReviewsImages/person1.jpg",
  },
  {
    id: "feedback-2",
    content:
      "Navigating through unitech is a breeze, thanks to its user-friendly interface. It's evident that the platform has been designed with the end-user in mind. The intuitive design allows our team to adapt quickly, minimizing the learning curve and ensuring a smooth transition.",
    name: "Jenny Wilson",
    title: "TechSolutions Inc.",
    img: "ReviewsImages/person2.jpg",
  },
  {
    id: "feedback-3",
    content:
      "The platform seamlessly connects various systems within our workflow, eliminating data silos and paving the way for a more cohesive operation. The ease with which it integrates with our existing stack has truly simplified our day-to-day operations.",
    name: "Bessie Cooper",
    title: "TechSynergy Co.",
    img: "ReviewsImages/person3.jpg",
  },
  {
    id: "feedback-4",
    content:
      "What sets unitech apart is its commitment to providing tailored solutions. Unlike one-size-fits-all platforms, unitech recognizes the uniqueness of our industry and customizes its offerings accordingly. This level of personalization has significantly contributed to the specific challenges.",
    name: "Leslie Alexander",
    title: "Creative Studios",
    img: "ReviewsImages/person4.jpg",
  },
  {
    id: "feedback-5",
    content:
      "I've been using Unitech for a few months now, and it's been a game-changer for my business. The seamless integration and innovative features have significantly improved our workflow. The support team is responsive, and the platform's customization options are impressive.",
    name: "Cameron Williamson",
    title: "PixelCrafters",
    img: "ReviewsImages/person5.jpg",
  },
];

const Reviews = () => {
  // Duplicate the feedback items to create a continuous loop
  const feedbackLoop = [...feedback, ...feedback];

  // Adjust responsive settings for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='reviews-main'>
      <h3>Testimonials</h3>
      <h1>Customer Reviews</h1>
      <div className="carousel-container">
        {/* Implement the carousel */}
        <Carousel
          responsive={responsive}
          autoPlay={true} // Make carousel auto-moving
          autoPlaySpeed={3000} // Set the speed of auto-moving (in milliseconds)
          arrows={false} // Hide default arrows
        >
          {/* Map over the duplicated feedback data and render FeedbackCard for each feedback */}
          {feedbackLoop.map((card, index) => (
            <FeedbackCard key={index} {...card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
