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
                                <h3><Link href="/services/service-details">Import <span>Marbles | Stones | Minerals</span></Link></h3>
                                <div className="content">
                                    <p>Importing Premium Stones to Elevate Every Space with Excellence.</p>
                                    <ul className="tag-list">
                                        <li><Link href="/services">COPPER </Link></li>
                                        <li><Link href="/services">BAUXITE </Link></li>
                                        <li><Link href="/services">CALCIUM CARBONATE</Link></li>
                                        <li><Link href="/services">QUARTZ</Link></li>
                                        <li><Link href="/services">ARMANI GREY</Link></li>
                                        <li><Link href="/services">SILVER TERVENTINE</Link></li>
                                        <li><Link href="/services"> ZIARAT WHITE </Link></li>
                                        <li><Link href="/services"> BLACK PANTHER </Link></li>
                                        <li><Link href="/services">MARQUIQNA </Link></li>
                                        <li><Link href="/services">SILVER DRAGON </Link></li>
                                        <li><Link href="/services">CARRARA CLOUD </Link></li>
                                        <li><Link href="/services">CALACUTTA PANDA </Link></li>
                                        <li><Link href="/services">ARBESCATO VIOLA </Link></li>
                                        <li><Link href="/services"> ARBESCATO CORCHIA </Link></li>
                                        <li><Link href="/services">CALACUTTA FOREST </Link></li>
                                        <li><Link href="/services">CALACUTTA ORO </Link></li>
                                        <li><Link href="/services">CALACUTTA LINCOLN </Link></li>
                                    </ul>
                                </div>
                                <div className="button-area">
                                    <Link href="/services">
                                        <i className="bi bi-arrow-right" />
                                    </Link>
                                </div>
                            </li>
                            <li className="single-services mb-20 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <h3><Link href="/services/service-details">Export <span>Marbles | Stones | Minerals</span></Link></h3>
                                <div className="content">
                                      <p>Export Premium Stones to Elevate Every Space with Excellence.</p>
                                    <ul className="tag-list">
                                        <li><Link href="/services">COPPER </Link></li>
                                        <li><Link href="/services">BAUXITE </Link></li>
                                        <li><Link href="/services">CALCIUM CARBONATE</Link></li>
                                        <li><Link href="/services">QUARTZ</Link></li>
                                        <li><Link href="/services">ARMANI GREY</Link></li>
                                        <li><Link href="/services">SILVER TERVENTINE</Link></li>
                                        <li><Link href="/services"> ZIARAT WHITE </Link></li>
                                        <li><Link href="/services"> BLACK PANTHER </Link></li>
                                        <li><Link href="/services">MARQUIQNA </Link></li>
                                        <li><Link href="/services">SILVER DRAGON </Link></li>
                                        <li><Link href="/services">CARRARA CLOUD </Link></li>
                                        <li><Link href="/services">CALACUTTA PANDA </Link></li>
                                        <li><Link href="/services">ARBESCATO VIOLA </Link></li>
                                        <li><Link href="/services"> ARBESCATO CORCHIA </Link></li>
                                        <li><Link href="/services">CALACUTTA FOREST </Link></li>
                                        <li><Link href="/services">CALACUTTA ORO </Link></li>
                                        <li><Link href="/services">CALACUTTA LINCOLN </Link></li>
                                    </ul>
                                </div>
                                <div className="button-area">
                                    <Link href="/services">
                                        <i className="bi bi-arrow-right" />
                                    </Link>
                                </div>
                            </li>
                            <li className="single-services wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <h3><Link href="/services">Mining <span>Minerals</span></Link></h3>
                                <div className="content">
                                    <p>Extracting Nature’s Finest Minerals with Precision and Care.</p>
                                    <ul className="tag-list">
                                        <li><Link href="/services">COPPER </Link></li>
                                        <li><Link href="/services">BAUXITE </Link></li>
                                        <li><Link href="/services">CALCIUM CARBONATE </Link></li>
                                        <li><Link href="/services">QUARTZ</Link></li>
                                    </ul>
                                </div>
                                <div className="button-area">
                                    <Link href="/services">
                                        <i className="bi bi-arrow-right" />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link href="/services" className="primary-btn2 bounce_up">
                            <span>
                                View All Services
                                <svg viewBox="0 0 13 20">
                                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home1Service