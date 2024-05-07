import React from 'react'
import './PageEnd.styles.css';

const PageEnd = () => {
  return (
    <div className='pageEnd grid grid-cols-6'>
        <div className='pageEnd-container1 col-span-2 flex justify-center'>
            <div className='flex flex-col'>
            <h1>Unitech</h1>
            <div className='text'>4517 Washington Ave. Manchester, Kentucky 39495</div>
            <div className='logo-btns'>
                <button className='twitter'><img src="PageEndImg/logo1.svg" alt="" /></button>
                <button className='facebook'><img src="PageEndImg/logo2.svg" alt="" /></button>
                <button className='youtube'><img src="PageEndImg/logo3.svg" alt="" /></button>
                <button className='instagram'><img src="PageEndImg/logo4.svg" alt="" /></button>
            </div>
            </div>
        </div>
        <div className='pageEnd-container2 col-span-1 flex justify-center'>
            <div className='flex flex-col'>
            <h2 className='category-heading'>Product</h2>
            <button>Home</button>
            <button>Features</button>
            <button>About us</button>
            <button>Integrations</button>
            <button>Pricing</button>
            </div>
        </div>
        <div className='pageEnd-container3 col-span-1 flex justify-center'>
        <div className='flex flex-col'>
            <h2 className='category-heading'>Company</h2>
            <button>Careers</button>
            <button>Blogs</button>
            <button>FAQ</button>
            <button>Reviews</button>
            <button>Contact us</button>
            </div>
        </div>
        <div className='pageEnd-container4 col-span-1 flex justify-center'>
        <div className='flex flex-col'>
            <h2 className='category-heading'>Resources</h2>
            <button>Style Guide</button>
            <button>Licensing</button>
            <button>Changelog</button>
            <button>Password</button>
            <button>Error 404</button>
            </div>
        </div>
        <div className='pageEnd-container5 col-span-1 flex justify-center'>
        <div className='flex flex-col'>
            <h2 className='category-heading'>Utilities</h2>
            <button>Privacy Policy</button>
            <button>Terms & Conditions</button>
            <button>Cookie Policy</button>
        </div>
        </div>
    </div>
  )
}

export default PageEnd
