"use client"
import useModalVideo from '@/utils/useModalVideo';
import React from 'react'

const Home1Banner2 = () => {
    const { openModal, Modal } = useModalVideo();
    return (
        <>
            <div className="home1-banner2-section mb-130" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url(assets/img/home1/home-banner5.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="banner-content">
                                <div className="video-area">
                                    <h2>Global Marble and Stone Export</h2>
                                   
                                </div>
                                {/* <h2>Own Building.</h2> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Modal/>
            </div>
            {/* <div className="logo-section mb-130">
                <div className="container-fluid">
                    <div className="logo-wrap">
                        <div className="logo-title">
                            <h6>A partner, Not A Vendor:</h6>
                        </div>
                        <div className="marquee">
                            <div className="marquee__group">
                                <a href="#"><img src="assets/img/home1/partner-01.png" alt="" /></a>
                                <a href="#"><img src="assets/img/home1/partner-02.png" alt="" /></a>
                                <a href="#"><img src="assets/img/home1/partner-03.png" alt="" /></a>
                                <a href="#"><img src="assets/img/home1/partner-04.png" alt="" /></a>
                                <a href="#"><img src="assets/img/home1/partner-05.png" alt="" /></a>
                                <a href="#"><img src="assets/img/home1/partner-06.png" alt="" /></a>
                            </div>
                            <div aria-hidden="true" className="marquee__group">
                                <a href="#"><img src="assets/img/home1/partner-01.png" alt="" /></a>
                                <a href="#"><img src="assets/img/home1/partner-02.png" alt="" /></a>
                                <a href="#"><img src="assets/img/home1/partner-03.png" alt="" /></a>
                                <a href="#"><img src="assets/img/home1/partner-04.png" alt="" /></a>
                                <a href="#"><img src="assets/img/home1/partner-05.png" alt="" /></a>
                                <a href="#"><img src="assets/img/home1/partner-06.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


        </>
    )
}

export default Home1Banner2