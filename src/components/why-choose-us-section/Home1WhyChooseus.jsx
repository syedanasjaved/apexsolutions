"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import CountUp from 'react-countup'
const Home1WhyChooseus = () => {

  return (
    <div className="home1-why-choose-us-section mb-130">
    <div className="container">
      <div className="row gy-5 align-items-center justify-content-between">
        <div className="col-xl-4 col-lg-5 col-md-7">
          <div className="why-choose-us-content-wrap">
            <div className="section-title wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <span>Why Choose Us</span>
              <h2>Quality You Can Trust.</h2>
              <p>Delivering premium natural and engineered stones with unmatched precision, durability, and excellence.</p>
            </div>
            <div className="why-choose-us-content">
              <h5>SINCE 2003</h5>
              <p>With over two decades of experience, ApexSolutions has been delivering premium stones with expertise, reliability, and excellence.</p>
              <Link href="/about" className="primary-btn">
                About Us More
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="why-choose-counter-area">
            <ul className="counter-list">
              <li className="single-counter">
                <div className="number">
                  <h2 className="counter"><CountUp end={200}  /></h2>
                </div>
                <div className="content">
                  <p>Export Shipments over</p>
                </div>
              </li>
              <li className="single-counter">
                <div className="number">
                  <h2 className="counter"><CountUp end={200}  /></h2>
                </div>
                <div className="content">
                  <p>Import Shipments over</p>
                </div>
              </li>
              <li className="single-counter">
                <div className="number">
                  <h2 className="counter"><CountUp end={150}  /></h2>
                  {/* <span>K</span> */}
                </div>
                <div className="content">
                  <p>Awesome Clients Over</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img src="assets/img/home1/why-choose-us-bg.png" alt="" className="bg-img" />
  </div>
  
  )
}

export default Home1WhyChooseus