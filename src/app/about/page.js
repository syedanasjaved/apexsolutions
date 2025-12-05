"use client"
import Breadcrum from '@/components/common/Breadcrum'

import Header1 from '@/components/header/Header1'
import Footer1 from '@/components/Footer/Footer1'
import Link from 'next/link'
import useModalVideo from '@/utils/useModalVideo'
import Home1Testimonial from '@/components/testimonial/Home1Testimonial'
import React, { useMemo } from "react";
import Home1About from '@/components/about/Home1About'
import Home1Banner2 from '@/components/banner/Home1Banner2'
import Home1Faq from '@/components/faq-section/Home1Faq'

// import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
// import Home from '../page'
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const AboutPage = () => {

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".team-slider-next",
        prevEl: ".team-slider-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  const { openModal, Modal } = useModalVideo();
  return (
    <div>
      <Header1 fluid={"container-fluid"} />
      <Breadcrum content='View Our Story' pageTitle={'About Us'} pagename={'About Us'} />
      <div className='mt-100'></div>
      <Home1About />
     
       <Home1Banner2 />
     {/* <Home1Faq /> */}
      {/* <div className="home1-team-section mb-130">
        <div className="container">
          <div className="row gy-5 align-items-center justify-content-between mb-70">
            <div className="col-lg-4 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="section-title">
                <span>Our Creative Team</span>
                <h2>Meet Our Nice Team.</h2>
              </div>
              <div className="slider-btn-grp d-lg-flex d-none">
                <div className="slider-btn team-slider-prev">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="slider-btn team-slider-next">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-lg-8 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="founder-card">
                <div className="founder-img">
                  <img src="assets/img/home1/home1-team-founder-img.png" alt="" />
                </div>
                <div className="founder-content">
                  <p>“We understand your needs and deliver digitaloi marketing through unique selling oneto homeles proposition Our team of expert”.</p>
                  <div className="name-and-desig">
                    <span>Founder at, Vernex</span>
                    <h5>Nathan Joshua</h5>
                  </div>
                </div>
              </div>
              <div className="slider-btn-grp d-lg-none d-flex">
                <div className="slider-btn team-slider-prev">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="slider-btn team-slider-next">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper home1-team-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="assets/img/home1/team-img1.png" alt="" />
                      </div>
                      <div className="team-content">
                        <span>Project Manager</span>
                        <h5>Olivern James</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="assets/img/home1/team-img2.png" alt="" />
                      </div>
                      <div className="team-content">
                        <span>Architects</span>
                        <h5>Mateob Henry</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="assets/img/home1/team-img3.png" alt="" />
                      </div>
                      <div className="team-content">
                        <span>Engineers</span>
                        <h5>Eliason Jacob</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="assets/img/home1/team-img4.png" alt="" />
                      </div>
                      <div className="team-content">
                        <span>Safety Officers</span>
                        <h5>Caleb Cooper</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="assets/img/home1/team-img5.png" alt="" />
                      </div>
                      <div className="team-content">
                        <span>Project Manager</span>
                        <h5>Olivern James</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="assets/img/home1/team-img6.png" alt="" />
                      </div>
                      <div className="team-content">
                        <span>Architects</span>
                        <h5>Mateob Henry</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Home1Testimonial /> */}

 
      <div className="home1-footer-top-banner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner-content">
                <div className="section-title white wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <span>Building Your Vision</span>
                  <h2>Let's Build Dream Something Amazing.</h2>
                </div>
                <div className="button-area wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <Link href="/contact" className="primary-btn2 white-bg">
                    <span>
                      Start A Project
                      <svg viewBox="0 0 13 20">
                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/contact" className="primary-btn white">
                    Contact With Us
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer1 />
    </div>
  )
}

export default AboutPage    