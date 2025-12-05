import Link from 'next/link'
import React from 'react'

const Home1Service = () => {
    return (
        <div className="home1-service-section mb-130">
            <div className="container">
                <div className="row justify-content-between align-items-end mb-80 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-4">
                        <div className="section-title">
                            <span>Our Services</span>
                            <h2>Services Tailored You.</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="section-content">
                            <p>At ApexSolutions, we specialize in the mining of premium natural stones and provide seamless import and export services, delivering quality marble and engineered stones worldwide.</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-70">
                    <div className="col-lg-12">
                        <ul className="sevices-wrap">
                            <li className="single-services mb-20 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <h3><Link href="/products/minerals"> <span>Marbles </span></Link></h3>
                                <div className="content">
                                    <p>Marbles that redefine luxury and elevate every space</p>
                                    <ul className="tag-list">
                                        <li><Link href="/products/minerals"> ARMANI GREY </Link></li>
                                        <li><Link href="/products/minerals">SILVER TERVENTINE </Link></li>
                                        <li><Link href="/products/minerals">ZIARAT WHITE</Link></li>
                                        <li><Link href="/products/minerals">BLACK PANTHER</Link></li>
                                        <li><Link href="/products/minerals">MARQUIQNA</Link></li>
                                        <li><Link href="/products/minerals">SILVER DRAGON</Link></li>
                                        <li><Link href="/products/minerals"> GREEN ONYX </Link></li>
                                        <li><Link href="/products/minerals"> TEAK </Link></li>
                                        <li><Link href="/products/minerals">IRESH WHITE </Link></li>
                                        <li><Link href="/products/minerals">ARBESCATO </Link></li>
                                        <li><Link href="/products/minerals">CRYSTAL WHITE </Link></li>
                                        <li><Link href="/products/minerals"> WINTER BREEZE </Link></li>
                                        <li><Link href="/products/minerals">BLACK POOL </Link></li>
                                        <li><Link href="/products/minerals"> OCEANIC WHITE </Link></li>
                                     
                                    </ul>
                                </div>
                                <div className="button-area">
                                    <Link href="/products/marbles">
                                        <i className="bi bi-arrow-right" />
                                    </Link>
                                </div>
                            </li>
                            <li className="single-services mb-20 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <h3><Link href="/products/minerals/service-details"> <span> Stones </span></Link></h3>
                                <div className="content">
                                      <p>Engineered for strength, designed for elegance.</p>
                                    <ul className="tag-list">
                                        <li><Link href="/products/engineered"> CARRARA CLOUD   </Link></li>
                                        <li><Link href="/products/engineered">  CALACUTTA PANDA  </Link></li>
                                        <li><Link href="/products/engineered">   ARBESCATO VIOLA </Link></li>
                                        <li><Link href="/products/engineered">  ARBESCATO CORCHIA  </Link></li>
                                        <li><Link href="/products/engineered">  CALACUTTA FOREST  </Link></li>
                                        <li><Link href="/products/engineered">  CALACUTTA ORO  </Link></li>
                                        <li><Link href="/products/engineered">  CALACUTTA LINCOLN  </Link></li>
                                        <li><Link href="/products/engineered">  BLACK AND WHITE MURAL  </Link></li>
                                        <li><Link href="/products/engineered">   ARMANI CLASSIC </Link></li>
                                        <li><Link href="/products/engineered">  CALACUTTA TROPICAL  </Link></li>
                                        <li><Link href="/products/engineered">   CALACUTTA MINSIC </Link></li>
                                        <li><Link href="/products/engineered">    CALACUTA DREAM BLACK</Link></li>
                                        <li><Link href="/products/engineered">CARRARA BELLA    </Link></li>
                                        <li><Link href="/products/engineered">   ICE WHITE  </Link></li>
                                        <li><Link href="/products/engineered">   AQUA CANYON </Link></li>
                                        <li><Link href="/products/engineered">    MOST GREY </Link></li>
                                        <li><Link href="/products/engineered">   PURE WHITE </Link></li>
                                         <li><Link href="/products/engineered">   SILVER GREY </Link></li>
                                    </ul>
                                </div>
                                <div className="button-area">
                                    <Link href="/products/engineered">
                                        <i className="bi bi-arrow-right" />
                                    </Link>
                                </div>
                            </li>
                            <li className="single-services wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <h3><Link href="/products/minerals"> <span>Minerals</span></Link></h3>
                                <div className="content">
                                    <p>Premium minerals sourced with purity and precision.</p>
                                    <ul className="tag-list">
                                        <li><Link href="/products/marbles">COPPER </Link></li>
                                        <li><Link href="/products/marbles">BAUXITE </Link></li>
                                        <li><Link href="/products/marbles">CALCIUM CARBONATE </Link></li>
                                        <li><Link href="/products/marbles">QUARTZ</Link></li>
                                    </ul>
                                </div>
                                <div className="button-area">
                                    <Link href="/products/minerals">
                                        <i className="bi bi-arrow-right" />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link href="/products/minerals" className="primary-btn2 bounce_up">
                            <span>
                                View All Services
                                <svg viewBox="0 0 13 20">
                                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div> */}
            </div>
        </div>


    )
}

export default Home1Service