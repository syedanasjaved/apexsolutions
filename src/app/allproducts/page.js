import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
import Home1FooterTop from '@/components/Footer/Home1FooterTop'
import Header1 from '@/components/header/Header1'
import Link from 'next/link'
import React from 'react'

const projectData = [
    {
        img: "/assets/img/APEX WEBSITE PICTURES/MINERALS/COPPER.jpg",
        title: "Minerals",
        delay: "200ms",
        link: "/products/minerals"
    },
    {
        img: "/assets/img/APEX WEBSITE PICTURES/MARBLES/BLACK PANTHER.jpg",
        title: "Marbles",
        delay: "400ms",
        link: "/products/marbles"    
    },
    {
        img: "/assets/img/APEX WEBSITE PICTURES/ENGINEERED STONE/CALACUTTA DREAM BLACK.jpg",
        title: "Engineered Stones",
        delay: "600ms",
        link: "/products/engineered"   
    }
];

const Page = () => {
    return (
        <>
            <Header1 fluid={"container-fluid"} />
            <Breadcrum 
                content='Our Latest Work' 
                pageTitle={'All Products'} 
                pagename={'Project'} 
            />

            <div className="project-grid-page pt-120 mb-120">
                <div className="container">
                    <div className="row gy-5 mb-70">

                        {projectData.map((item, index) => (
                            <div 
                                key={index} 
                                className="col-lg-4 col-md-6 wow animate fadeInDown"
                                data-wow-delay={item.delay}
                                data-wow-duration="1500ms"
                            >
                                <div className="project-card two magnetic-item">
                                    <div className="project-img-wrap">
                                        <Link href={item.link} className="project-img">
                                            <img src={item.img} alt={item.title} />
                                        </Link>
                                    </div>
                                    <div className="project-content">
                                        <h4>
                                            <Link href={item.link}>
                                                {item.title}
                                            </Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <Home1FooterTop />
            <Footer1 />
        </>
    )
}

export default Page
