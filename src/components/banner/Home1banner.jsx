"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const Home1Banner = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            effect: 'fade',
            autoplay: {
                delay: 2500, 
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
            },
        };
    }, []);
    return (
        <div className="home1-banner-section mb-130">
            <div className="row">
                <div className="col-lg-12">
                    <Swiper {...settings} className="swiper home1-banner-slider">
                        <div className="swiper-wrapper">
                           <SwiperSlide>
    <div className="banner-bg slide-1" />
</SwiperSlide><SwiperSlide>
    <div className="banner-bg slide-2" />
</SwiperSlide>
                           
<SwiperSlide>
    <div className="banner-bg slide-3" />
</SwiperSlide><SwiperSlide>
    <div className="banner-bg slide-4" />
</SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
            <div className="banner-content">
                <h1>Shaping the Future with Timeless Stone</h1>
                <Link href="/contact" className="primary-btn2 white-bg">
                    <span>
                        Contact Us
                        <svg viewBox="0 0 13 20">
                            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                        </svg>
                    </span>
                </Link>
            </div>
            <div className="pagination-area">
                <div className="swiper-pagination1" />
            </div>
        </div>


    )
}

export default Home1Banner