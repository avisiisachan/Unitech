import React from "react";
import Link from "next/link";
import './Navbar.styles.css';

const Navbar = () => {
    return (
      <>
        <div className="navbar-container">
          <div className="container">
            <div className="flex justify-between items-center">
              <span className="logo">UNITECH</span>
              <ul className="nav-links justify-center"> {/* Apply justify-center class */}
                <li>
                  <Link href="/about">
                    <p>About Us</p>
                  </Link>
                </li>
                <li>
                  <Link href="/features">
                    <p>Features</p>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs">
                    <p>Blogs</p>
                  </Link>
                </li>
                <li>
                  <Link href="/careers">
                    <p>Careers</p>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <p>Pricing</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <p>Contact</p>
                  </Link>
                </li>
              </ul>
              <button className="get-started-btn ">Get Started</button> {/* Add Get Started button */}
            </div>
          </div>
        </div>
      </>
    );
  };

export default Navbar;
