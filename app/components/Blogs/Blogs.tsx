import React from 'react'
import './Blogs.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
  return (
    <div className='blogs-main'>
        <h3>Our Blogs</h3>
        <h1>Articles and Resources</h1>
    <div className='blogs'>
        <div className='blog-container'>
            <div className='img-row'>
                <img src="BlogsImages/img1.jpg" alt="" />
            </div>
            <div className='blog-text-row'>
                <div className='blog-date'>
                <FontAwesomeIcon icon={faCalendar} className='calendar-icon' />
                    Mar 1, 2024
                </div>
                <div className='blog-text'>
                    Beyond the blueprint crafting your success
                </div>
                <button className='blog-btn'>
            Read More
          </button>
            </div>
        </div>
        <div className='blog-container'>
            <div className='img-row'>
            <img src="BlogsImages/img2.jpg" alt="" />
            </div>
            <div className='blog-text-row'>
            <div className='blog-date'>
            <FontAwesomeIcon icon={faCalendar} className='calendar-icon' />
                    Apr 23, 2024
                </div>
                <div className='blog-text'>
                    Navigating the landscape of core principles
                </div>
                <button className='blog-btn'>
            
            Read More
          </button>
            </div>
        </div>
        <div className='blog-container'>
            <div className='img-row'>
            <img src="BlogsImages/img3.jpg" alt="" />
            </div>
            <div className='blog-text-row'>
            <div className='blog-date'>
            <FontAwesomeIcon icon={faCalendar} className='calendar-icon' />
                    May 6, 2024
                </div>
                <div className='blog-text'>
                    Sustainable growth strategeis for a lasting future
                </div>
                <button className='blog-btn'>
            Read More
          </button>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Blogs
